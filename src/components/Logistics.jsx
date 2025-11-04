import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Truck, Factory, Globe, MapPin } from 'lucide-react';

const steps = [
  { icon: <Factory className="h-5 w-5" />, title: 'Refinery/Mill', desc: 'Indonesia & Malaysia origin' },
  { icon: <Truck className="h-5 w-5" />, title: 'Port Handling', desc: 'Bulk/ISO tank, flexitank' },
  { icon: <Globe className="h-5 w-5" />, title: 'Sea Freight', desc: 'FOB/CIF with Tier-1 carriers' },
  { icon: <MapPin className="h-5 w-5" />, title: 'Destination', desc: 'Customs clearance support' },
];

const Logistics = () => {
  return (
    <section id="logistics" className="relative w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl text-neutral-900">Global Logistics</h2>
            <p className="mt-2 max-w-3xl text-neutral-600">
              We service Asia, Middle East, Europe, Africa, and the Americas with optimized routes and documentation support. Trackable shipments and dedicated account managers.
            </p>
          </div>
          <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700">Reliable supply chain</div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative h-[360px] overflow-hidden rounded-xl border border-neutral-200"
          >
            <Spline
              scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-2 text-emerald-600">
                  {s.icon}
                  <h3 className="font-semibold text-neutral-900">{s.title}</h3>
                </div>
                <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-xl bg-neutral-900 p-6 text-white">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Request a quote or supply schedule</h3>
              <p className="mt-1 text-neutral-300">Share destination port, product, volume (MT/month), and incoterms preference.</p>
            </div>
            <a
              href="mailto:trade@palm-global.example?subject=Palm%20Oil%20B2B%20Inquiry"
              className="inline-flex items-center justify-center rounded-md bg-amber-400 px-5 py-3 font-medium text-black transition hover:bg-amber-300"
            >
              trade@palm-global.example
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
