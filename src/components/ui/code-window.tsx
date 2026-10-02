"use client";

import { useState } from "react";
import { FaJava, FaReact } from "react-icons/fa6";

export function CodeWindow() {
  const [activeTab, setActiveTab] = useState<"java" | "react">("java");

  return (
    <div className="w-full max-w-lg rounded-xl bg-[#161b22] border border-[#30363d] shadow-2xl font-mono text-xs overflow-hidden">
      {/* IDE Window Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#0d1117] border-b border-[#30363d] overflow-hidden">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shrink-0" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shrink-0" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block shrink-0" />
        </div>

        {/* Tabs - Horizontal Scrollable on Mobile */}
        <div className="flex items-center gap-1 bg-[#161b22] p-1 ml-2 rounded-md border border-[#30363d] overflow-x-auto max-w-[calc(100%-60px)] whitespace-nowrap scrollbar-none">
          <button
            onClick={() => setActiveTab("java")}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded text-xs transition shrink-0 ${
              activeTab === "java"
                ? "bg-[#21262d] text-orange-400 font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <FaJava className="size-3.5 text-orange-500 shrink-0" />
            <span>DeveloperController.java</span>
          </button>
          <button
            onClick={() => setActiveTab("react")}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded text-xs transition shrink-0 ${
              activeTab === "react"
                ? "bg-[#21262d] text-cyan-400 font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <FaReact className="size-3.5 text-cyan-400 shrink-0" />
            <span>MarcosDev.tsx</span>
          </button>
        </div>
      </div>

      {/* Code Content - Scrollable horizontally & vertically on mobile */}
      <div className="p-4 text-zinc-300 leading-relaxed overflow-x-auto overflow-y-auto max-h-[280px] sm:max-h-[360px] bg-[#0d1117]/60 min-h-[220px]">
        {activeTab === "java" ? (
          <pre className="text-zinc-300">
            <code>
              <span className="text-purple-400">@RestController</span>
              {"\n"}
              <span className="text-purple-400">@RequestMapping</span>(
              <span className="text-emerald-400">&quot;/api/v1/dev&quot;</span>)
              {"\n"}
              <span className="text-blue-400">public class</span>{" "}
              <span className="text-yellow-300">DeveloperController</span> &#123;
              {"\n\n"}
              {"  "}
              <span className="text-purple-400">@GetMapping</span>(
              <span className="text-emerald-400">&quot;/profile&quot;</span>)
              {"\n"}
              {"  "}
              <span className="text-blue-400">public</span> ResponseEntity&lt;
              <span className="text-yellow-300">DevProfile</span>&gt; getProfile() &#123;
              {"\n"}
              {"    "}
              <span className="text-blue-400">return</span> ResponseEntity.ok(
              <span className="text-blue-400">new</span>{" "}
              <span className="text-yellow-300">DevProfile</span>(
              {"\n"}
              {"      "}
              <span className="text-emerald-400">&quot;Marcos Sousa&quot;</span>,
              {"\n"}
              {"      "}
              <span className="text-emerald-400">&quot;Full Stack Developer&quot;</span>,
              {"\n"}
              {"      "}List.of(
              <span className="text-emerald-400">&quot;Java&quot;</span>,{" "}
              <span className="text-emerald-400">&quot;Spring Boot&quot;</span>,{" "}
              <span className="text-emerald-400">&quot;React&quot;</span>,{" "}
              <span className="text-emerald-400">&quot;Next.js&quot;</span>)
              {"\n"}
              {"    "});
              {"\n"}
              {"  "}&#125;
              {"\n"}&#125;
            </code>
          </pre>
        ) : (
          <pre className="text-zinc-300">
            <code>
              <span className="text-blue-400">import</span> React <span className="text-blue-400">from</span>{" "}
              <span className="text-emerald-400">&apos;react&apos;</span>;
              {"\n\n"}
              <span className="text-blue-400">export const</span>{" "}
              <span className="text-yellow-300">MarcosDev</span> = () =&gt; &#123;
              {"\n"}
              {"  "}
              <span className="text-blue-400">return</span> (
              {"\n"}
              {"    "}&lt;<span className="text-cyan-400">DeveloperCard</span>
              {"\n"}
              {"      "}name=
              <span className="text-emerald-400">&quot;Marcos Sousa&quot;</span>
              {"\n"}
              {"      "}role=
              <span className="text-emerald-400">&quot;Full Stack Software Engineer&quot;</span>
              {"\n"}
              {"      "}stack=&#123;[
              <span className="text-emerald-400">&apos;Java&apos;</span>,{" "}
              <span className="text-emerald-400">&apos;Spring Boot&apos;</span>,{" "}
              <span className="text-emerald-400">&apos;React&apos;</span>,{" "}
              <span className="text-emerald-400">&apos;Next.js&apos;</span>
              ]&#125;
              {"\n"}
              {"      "}status=
              <span className="text-emerald-400">&quot;Available for Projects&quot;</span>
              {"\n"}
              {"    "}/&gt;
              {"\n"}
              {"  "});
              {"\n"}&#125;;
            </code>
          </pre>
        )}
      </div>
    </div>
  );
}
