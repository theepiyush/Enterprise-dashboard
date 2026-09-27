import { useEffect, useRef } from "react";
import { WebSocketService } from "@/services/websocket/WebSocketService";
import { useAppDispatch } from "@/app/hooks";
import { setRealtimePoint } from "@/features/dashboard/slices/dashboardSlice";

export function useWebSocket() {
  const dispatch = useAppDispatch();
  const service = useRef<WebSocketService | null>(null);

  useEffect(() => {
    service.current = new WebSocketService((point) => dispatch(setRealtimePoint(point)));
    service.current.connect();
    return () => service.current?.disconnect();
  }, [dispatch]);

  return { reconnect: () => service.current?.reconnect() };
}