// AnimatedIcons.jsx
import { motion as Motion } from "framer-motion"



export const AnalyzingIcon = () => {
  return (
    <Motion.div className="w-16 h-16 mb-4">
      <svg viewBox="0 0 64 64" className="w-full h-full" role="img" aria-label="Analyzing bars">
        {/* Bar 1 */}
        <Motion.rect
          x={10}
          y={44}          // keep bottom aligned visually
          width={8}
          height={16}     // base value
          fill="#3B82F6"
          initial={{ height: 16 }}
          animate={{ height: [16, 26, 16] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bar 2 */}
        <Motion.rect
          x={24}
          y={36}
          width={8}
          height={24}
          fill="#8B5CF6"
          initial={{ height: 24 }}
          animate={{ height: [24, 34, 24] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
        />
        {/* Bar 3 */}
        <Motion.rect
          x={38}
          y={28}
          width={8}
          height={32}
          fill="#06D6A0"
          initial={{ height: 32 }}
          animate={{ height: [32, 42, 32] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </Motion.div>
  )
}

export const DesignDevIcon = () => {
  return (
    <Motion.div className="w-16 h-16 mb-4 relative">
      <Motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 64 64" className="w-full h-full" role="img" aria-label="Code brackets">
          <Motion.path
            d="M20 20 L10 32 L20 44"
            stroke="#3B82F6"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <Motion.path
            d="M44 20 L54 32 L44 44"
            stroke="#8B5CF6"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
          <Motion.circle
            cx={32}
            cy={32}
            r={2}
            fill="#06D6A0"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </svg>
      </Motion.div>
    </Motion.div>
  )
}

export const IntegrationIcon = () => {
  return (
    <Motion.div className="w-16 h-16 mb-4">
      <svg viewBox="0 0 80 64" className="w-full h-full" role="img" aria-label="Integration puzzle">
        <Motion.path
          d="M10 20 L25 20 C25 15, 35 15, 35 20 L50 20 L50 35 C55 35, 55 45, 50 45 L35 45 C35 50, 25 50, 25 45 L10 45 Z"
          fill="#3B82F6"
          initial={{ x: -12, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
        <Motion.path
          d="M30 25 L45 25 C45 20, 55 20, 55 25 L70 25 L70 40 C75 40, 75 50, 70 50 L55 50 C55 55, 45 55, 45 50 L30 50 Z"
          fill="#8B5CF6"
          initial={{ x: 12, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        />
        <Motion.circle
          cx={40}
          cy={35}
          r={3}                // base r
          fill="#06D6A0"
          initial={{ r: 3, opacity: 0 }}
          animate={{ r: [3, 5, 3], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: 0.8 }}
        />
      </svg>
    </Motion.div>
  )
}

export const OptimizationIcon = () => {
  return (
    <Motion.div className="w-16 h-16 mb-4">
      <svg viewBox="0 0 64 64" className="w-full h-full" role="img" aria-label="Growth line">
        <Motion.path
          d="M10 50 Q20 30, 30 35 Q40 25, 50 15"
          stroke="#06D6A0"
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0.001 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.path
          d="M45 10 L55 15 L50 20"
          stroke="#06D6A0"
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.circle
          cx={20}
          cy={40}
          r={2}
          fill="#3B82F6"
          initial={{ r: 2, opacity: 0.6 }}
          animate={{ r: [2, 4, 2], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
        />
        <Motion.circle
          cx={35}
          cy={30}
          r={2}
          fill="#8B5CF6"
          initial={{ r: 2, opacity: 0.6 }}
          animate={{ r: [2, 4, 2], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.8 }}
        />
      </svg>
    </Motion.div>
  )
}
