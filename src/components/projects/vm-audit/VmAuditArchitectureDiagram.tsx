"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";

const desktopNodes = [
  {
    id: "env-a",
    label: "Environment A",
    sublabel: "source",
    x: 70,
    y: 78,
    w: 130,
    h: 58,
    tone: "blue",
    glyph: "A",
  },
  {
    id: "env-b",
    label: "Environment B",
    sublabel: "source",
    x: 70,
    y: 182,
    w: 130,
    h: 58,
    tone: "purple",
    glyph: "B",
  },
  {
    id: "virtualization",
    label: "Virtualization Platform",
    sublabel: "inventory state",
    x: 225,
    y: 130,
    w: 166,
    h: 66,
    tone: "cyan",
    glyph: "V",
  },
  {
    id: "audit",
    label: "Audit Platform",
    sublabel: "reconcile",
    x: 405,
    y: 130,
    w: 144,
    h: 66,
    tone: "blue",
    glyph: "A",
  },
  {
    id: "billing",
    label: "Billing Reconciliation",
    sublabel: "commercial match",
    x: 585,
    y: 130,
    w: 170,
    h: 66,
    tone: "purple",
    glyph: "B",
  },
  {
    id: "inventory",
    label: "Normalized Inventory",
    sublabel: "single source",
    x: 775,
    y: 130,
    w: 170,
    h: 66,
    tone: "green",
    glyph: "N",
  },
  {
    id: "reports",
    label: "Reports",
    sublabel: "evidence",
    x: 950,
    y: 78,
    w: 124,
    h: 58,
    tone: "orange",
    glyph: "R",
  },
  {
    id: "storage",
    label: "Object Storage",
    sublabel: "backup proof",
    x: 950,
    y: 182,
    w: 140,
    h: 58,
    tone: "emerald",
    glyph: "O",
  },
  {
    id: "approval",
    label: "Approval Gate",
    sublabel: "required",
    x: 1105,
    y: 130,
    w: 136,
    h: 66,
    tone: "orange",
    glyph: "G",
  },
  {
    id: "lifecycle",
    label: "Lifecycle Controls",
    sublabel: "safe action",
    x: 1265,
    y: 130,
    w: 150,
    h: 66,
    tone: "emerald",
    glyph: "L",
  },
];

const desktopPaths = [
  "M135 107 C158 112 174 124 190 141",
  "M135 211 C158 206 174 188 190 159",
  "M308 130 L333 130",
  "M477 130 L500 130",
  "M670 130 L690 130",
  "M860 116 C890 102 910 93 928 88",
  "M860 144 C890 158 910 171 928 182",
  "M1015 107 C1045 112 1060 124 1084 141",
  "M1015 211 C1045 206 1060 188 1084 159",
  "M1173 130 L1190 130",
];

const mobileNodes = [
  "Environment A + Environment B",
  "Virtualization Platform",
  "Audit Platform",
  "Billing Reconciliation",
  "Normalized Inventory",
  "Reports + Object Storage",
  "Approval Gate",
  "Lifecycle Controls",
];

function NodeBox({
  glyph,
  label,
  sublabel,
  tone,
  x,
  y,
  w,
  h,
}: {
  glyph: string;
  label: string;
  sublabel: string;
  tone: string;
  x: number;
  y: number;
  w: number;
  h: number;
}) {
  const toneMap = {
    blue: ["#3b82f6", "#0ea5e9"],
    purple: ["#8b5cf6", "#d946ef"],
    green: ["#22c55e", "#84cc16"],
    orange: ["#f97316", "#f59e0b"],
    cyan: ["#06b6d4", "#38bdf8"],
    emerald: ["#10b981", "#14b8a6"],
  } as const;
  const [start, end] = toneMap[tone as keyof typeof toneMap] ?? toneMap.blue;
  const gradientId = `node-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <g>
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={start} stopOpacity="0.98" />
          <stop offset="100%" stopColor={end} stopOpacity="0.88" />
        </linearGradient>
        <filter id={`${gradientId}-glow`} x="-40%" y="-60%" width="180%" height="220%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect
        fill={`url(#${gradientId})`}
        filter={`url(#${gradientId}-glow)`}
        height={h}
        opacity="0.18"
        rx="18"
        width={w}
        x={x - w / 2}
        y={y - h / 2}
      />
      <rect
        className="fill-card/90 stroke-border dark:fill-background/70"
        height={h}
        rx="16"
        width={w}
        x={x - w / 2}
        y={y - h / 2}
      />
      <rect
        fill={`url(#${gradientId})`}
        height="24"
        rx="8"
        width="24"
        x={x - w / 2 + 14}
        y={y - 12}
      />
      <text
        className="fill-white font-mono text-[10px] font-bold"
        dominantBaseline="middle"
        textAnchor="middle"
        x={x - w / 2 + 26}
        y={y + 1}
      >
        {glyph}
      </text>
      <text
        className="fill-foreground text-[13px] font-semibold"
        dominantBaseline="middle"
        x={x - w / 2 + 48}
        y={y - 7}
      >
        {label}
      </text>
      <text
        className="fill-muted-foreground font-mono text-[10px] uppercase tracking-[0.16em]"
        dominantBaseline="middle"
        x={x - w / 2 + 48}
        y={y + 12}
      >
        {sublabel}
      </text>
    </g>
  );
}

export function VmAuditArchitectureDiagram() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10" id="architecture">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-5 max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Solution Architecture
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            One continuous audit path from environment state to lifecycle control.
          </h2>
        </div>
        <VmAuditGlassCard accent="cyan" className="p-3 sm:p-4">
          <div className="hidden md:block">
            <svg
              aria-label="Architecture flow diagram"
              className="h-auto w-full text-secondary"
              role="img"
              viewBox="0 0 1344 286"
            >
              <defs>
                <marker
                  id="auditFlowArrow"
                  markerHeight="10"
                  markerWidth="10"
                  orient="auto"
                  refX="9"
                  refY="5"
                >
                  <path d="M0,0 L10,5 L0,10 Z" fill="currentColor" />
                </marker>
                <linearGradient id="auditFlowLine" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="22%" stopColor="#06b6d4" />
                  <stop offset="46%" stopColor="#8b5cf6" />
                  <stop offset="70%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              <rect
                className="fill-background/55 stroke-border"
                height="254"
                rx="24"
                width="1312"
                x="16"
                y="16"
              />
              <rect
                fill="url(#auditFlowLine)"
                height="254"
                opacity="0.06"
                rx="24"
                width="1312"
                x="16"
                y="16"
              />
              {desktopPaths.map((path, index) => (
                <motion.path
                  animate={reduceMotion ? undefined : { pathLength: 1, opacity: [0.55, 1, 0.7] }}
                  d={path}
                  fill="none"
                  initial={reduceMotion ? false : { pathLength: 0, opacity: 0.35 }}
                  key={path}
                  markerEnd="url(#auditFlowArrow)"
                  stroke="url(#auditFlowLine)"
                  strokeLinecap="round"
                  strokeWidth="3"
                  transition={{
                    delay: index * 0.06,
                    duration: 1.9,
                    repeat: reduceMotion ? 0 : Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
              {desktopNodes.map((node) => (
                <NodeBox key={node.id} {...node} />
              ))}
            </svg>
          </div>

          <svg
            aria-label="Mobile architecture flow diagram"
            className="h-[570px] w-full text-secondary md:hidden"
            role="img"
            viewBox="0 0 360 570"
          >
            <defs>
              <marker
                id="auditFlowArrowMobile"
                markerHeight="9"
                markerWidth="9"
                orient="auto"
                refX="8"
                refY="4.5"
              >
                <path d="M0,0 L9,4.5 L0,9 Z" fill="currentColor" />
              </marker>
            </defs>
            <rect
              className="fill-background/55 stroke-border"
              height="550"
              rx="22"
              width="336"
              x="12"
              y="10"
            />
            {mobileNodes.map((label, index) => {
              const y = 50 + index * 62;
              return (
                <g key={label}>
                  {index < mobileNodes.length - 1 ? (
                    <motion.path
                      animate={reduceMotion ? undefined : { opacity: [0.55, 1, 0.7] }}
                      d={`M180 ${y + 26} L180 ${y + 52}`}
                      markerEnd="url(#auditFlowArrowMobile)"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="3"
                      transition={{ duration: 1.6, repeat: reduceMotion ? 0 : Infinity }}
                    />
                  ) : null}
                  <rect
                    className="fill-card/90 stroke-border dark:fill-background/70"
                    height="48"
                    rx="14"
                    width="286"
                    x="37"
                    y={y - 24}
                  />
                  <circle className="fill-primary" cx="61" cy={y} r="5" />
                  <text
                    className="fill-foreground text-[13px] font-semibold"
                    dominantBaseline="middle"
                    x="78"
                    y={y}
                  >
                    {label}
                  </text>
                </g>
              );
            })}
          </svg>

          <p className="mt-3 rounded-xl border border-border bg-background/55 p-3 text-sm leading-6 text-muted-foreground">
            Flow: Environment A and Environment B feed the Virtualization Platform, the Audit
            Platform reconciles against billing state, then normalized evidence moves through
            Reports, Object Storage, Approval Gate, and Lifecycle Controls.
          </p>
        </VmAuditGlassCard>
      </div>
    </section>
  );
}
