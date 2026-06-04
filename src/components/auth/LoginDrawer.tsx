"use client";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginDrawer({ isOpen, onClose }: Props) {
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
              className="w-full border p-4 mb-4 outline-none text-black placeholder:text-gray-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-4 mb-4 outline-none text-black placeholder:text-gray-400"
            />

            <button
              onClick={() => {
                localStorage.setItem("loggedIn", "true");
                window.location.reload();
              }}
              className="w-full bg-[#ff5200] text-white py-4 font-bold"
            >
              LOGIN
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
