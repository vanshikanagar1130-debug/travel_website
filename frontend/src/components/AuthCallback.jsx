import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function AuthCallback() {
  const hasProcessed = useRef(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    if (hasProcessed.current) return;
    hasProcessed.current = true;
    const sessionId = new URLSearchParams(window.location.hash.slice(1)).get("session_id");
    if (!sessionId) {
      navigate("/", { replace: true });
      return;
    }
    axios
      .post(`${API}/auth/session`, { session_id: sessionId }, { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        navigate("/", { replace: true, state: { user: res.data } });
      })
      .catch(() => navigate("/", { replace: true }));
  }, [navigate, setUser]);

  return null;
}
