import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function MapLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[2000] flex flex-col items-center justify-center bg-gray-100/80 backdrop-blur-sm"
        >
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-2" />
            <p className="text-sm font-medium text-gray-500 font-serif italic">
                Loading Paradise Map...
            </p>
        </motion.div>
    );
}