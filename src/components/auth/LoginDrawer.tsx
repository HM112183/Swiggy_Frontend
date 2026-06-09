"use client";
import { useReducer } from "react";
import { useAuth } from "@/context/AuthContext";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface LoginState {
  username: string;
  password: string;
  loading: boolean;
}

type LoginAction =
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS" }
  | { type: "RESET" };

const initialState: LoginState = {
  username: "",
  password: "",
  loading: false,
};

function loginReducer(
  state: LoginState,
  action: LoginAction
): LoginState {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };

    case "RESET":
      return initialState;

    case "LOGIN_START":
      return {
        ...state,
        loading: true,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export default function LoginDrawer({ isOpen, onClose }: Props) {
const { login } = useAuth();

const [state, dispatch] = useReducer(
  loginReducer,
  initialState
);
  return (
    <>
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <div
            className="fixed right-0 top-0 h-screen w-[420px] bg-white z-50 p-10 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="text-3xl mb-10"
            >
              ×
            </button>

            <h2 className="text-4xl font-bold mb-3 text-black">
              Login
            </h2>

            <p className="text-[#686b78] mb-10">
              Enter your credentials
            </p>

            <input
              type="text"
              placeholder="Username"
              value={state.username}
              onChange={(e) =>
                dispatch({
                  type: "SET_USERNAME",
                  payload: e.target.value,
                })
              }
              className="w-full border p-4 mb-4 outline-none text-black placeholder:text-gray-400"
            />

            <input
                type="password"
                placeholder="Password"
                value={state.password}
                onChange={(e) =>
                  dispatch({
                    type: "SET_PASSWORD",
                    payload: e.target.value,
                  })
                }
              className="w-full border p-4 mb-4 outline-none text-black placeholder:text-gray-400"
            />

            <button
            disabled={state.loading}
              onClick={() => {
  if (
    state.username.trim() &&
    state.password.trim()
  ) {
    dispatch({ type: "LOGIN_START" });

    setTimeout(() => {
      login();

      dispatch({
        type: "LOGIN_SUCCESS",
      });

      dispatch({
        type: "RESET",
      });

      onClose();
    }, 1000);
  }
}}
              className="
                      w-full
                      bg-[#ff5200]
                      text-white
                      py-4
                      font-bold
                      transition-all
                      duration-300
                      disabled:opacity-70
                      "
            >
              {state.loading ? (
  <div className="flex items-center justify-center gap-2">
    <div
      className="
      w-4
      h-4
      border-2
      border-white
      border-t-transparent
      rounded-full
      animate-spin
      "
    />
    Logging in...
  </div>
) : (
  "LOGIN"
)}
            </button>

            <p className="mt-6 text-sm">
              New User?{" "}
              <span className="text-[#ff5200] font-semibold">
                Create Account
              </span>
            </p>
          </div>
        </>
      )}
    </>
  );
}
