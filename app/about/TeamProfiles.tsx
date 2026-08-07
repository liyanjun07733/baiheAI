"use client";

import { useState } from "react";
import type { TeamMember } from "../data/team";

export default function TeamProfiles({ members }: { members: TeamMember[] }) {
  const [openName, setOpenName] = useState<string | null>(null);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {members.map((person) => {
        const open = openName === person.name;
        const primaryContacts = person.contacts.slice(0, 3);
        const primaryFocus = person.focus.slice(0, 3);

        return (
          <article
            key={person.name}
            className="group min-w-0 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.025] shadow-[0_18px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:border-cyan-400/25"
          >
            {/* 名片正面 */}
            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="shrink-0">
                  <div className="h-[112px] w-[88px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:h-[132px] sm:w-[104px]">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-cyan-400/90">
                        BaiheAI Consultant
                      </p>
                      <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-[28px]">
                        {person.name}
                      </h3>
                      <p className="mt-1.5 text-sm font-bold leading-6 text-cyan-300 sm:text-base">
                        {person.role}
                      </p>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Professional
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {primaryFocus.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-cyan-400/10 bg-cyan-400/[0.055] px-2.5 py-1 text-[11px] leading-5 text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-white/8 pt-4">
                <p className="line-clamp-2 text-sm leading-7 text-gray-400">
                  {person.responsibility}
                </p>
              </div>

              {/* 主流联系方式 */}
              <div className="mt-4 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                {primaryContacts.map((contact) => (
                  <div
                    key={`${person.name}-primary-${contact.label}-${contact.value}`}
                    className="min-w-0 text-sm"
                  >
                    <span className="mr-2 text-[11px] font-bold uppercase tracking-wide text-gray-600">
                      {contact.label}
                    </span>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="break-all font-medium text-gray-200 transition hover:text-cyan-300"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="break-all font-medium text-gray-200">{contact.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setOpenName(open ? null : person.name)}
                aria-expanded={open}
                className="mt-5 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-left transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.045]"
              >
                <span className="text-sm font-bold text-white">
                  {open ? "收起详细资料" : "查看详细能力与联系方式"}
                </span>
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] text-lg leading-none text-cyan-300 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </div>

            {/* 折叠内容 */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-cyan-400/10 bg-black/20 px-5 py-6 sm:px-6">
                  <div className="grid gap-7 xl:grid-cols-[1fr_0.9fr]">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                        Professional Profile
                      </p>
                      <h4 className="mt-2 text-xl font-black text-white">
                        {person.detailTitle || "详细能力介绍"}
                      </h4>

                      <div className="mt-4 space-y-3 text-sm leading-7 text-gray-400">
                        {person.detailParagraphs?.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="mt-6">
                        <p className="text-xs font-bold tracking-[0.16em] text-gray-500">服务领域</p>
                        <div className="mt-3 space-y-2.5">
                          {person.services.map((service) => (
                            <div key={service} className="flex items-start gap-2.5 text-sm leading-6 text-gray-300">
                              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                              <span>{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-4 sm:p-5">
                      <p className="text-xs font-black tracking-[0.16em] text-white">全部联系方式</p>
                      <div className="mt-4 space-y-3.5">
                        {person.contacts.map((contact) => (
                          <div key={`${person.name}-all-${contact.label}-${contact.value}`}>
                            <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-600">
                              {contact.label}
                            </div>
                            {contact.href ? (
                              <a
                                href={contact.href}
                                className="mt-1 block break-all text-sm font-semibold text-gray-200 transition hover:text-cyan-300"
                              >
                                {contact.value}
                              </a>
                            ) : (
                              <div className="mt-1 break-all text-sm font-semibold text-gray-200">
                                {contact.value}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
