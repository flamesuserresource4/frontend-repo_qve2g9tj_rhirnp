import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Globe } from 'lucide-react';

const Sustainability = () => {
  const items = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: 'RSPO Certified Supply',
      desc: 'We prioritize RSPO-certified sources and offer segregated or mass balance options upon request.',
    },
    {
      icon: <Leaf className="h-5 w-5 text-emerald-500" />,
      title: 'Traceable & Ethical',
      desc: 'Upstream traceability to mills/estates, NDPE policy, and zero-burning commitments.',
    },
    {
      icon: <Globe className="h-5 w-5 text-emerald-500" />,
      title: 'Lower Carbon Routes',
      desc: 'Optimized shipping lanes and consolidated loads to reduce emissions and lead times.',
    },
  ];

  return (
    <section id="sustainability" className="relative w-full bg-neutral-950 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(245,158,11,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Sustainability & Compliance</h2>
            <p className="mt-2 max-w-3xl text-neutral-300">
              Our supply network across Indonesia and Malaysia adheres to rigorous environmental and social standards. Full COAs and compliance documents available.
            </p>
          </div>
          <div className="rounded-full bg-white/10 px-3 py-1 text-sm text-emerald-200 backdrop-blur-md">ESG-first sourcing</div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                {it.icon}
                <h3 className="text-lg font-semibold">{it.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-300">{it.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Avg. Lead Time', value: '12–18 days' },
            { label: 'On-time Shipment', value: '98.4%' },
            { label: 'COA Available', value: 'Batch-wise' },
            { label: 'Certs', value: 'RSPO, ISO, HALAL' },
          ].map((s) => (
            <div key={s.label} className="rounded-lg bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-emerald-300">{s.value}</div>
              <div className="text-xs text-neutral-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
