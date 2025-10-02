import { CircularProgress } from "@mui/material";

const LoadingOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white z-[9999] flex items-center justify-center">
        <CircularProgress
            size={60}
        />
    </div>
  );
};

export default LoadingOverlay;
