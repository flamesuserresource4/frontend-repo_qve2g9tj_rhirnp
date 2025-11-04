import React from 'react';
import { motion } from 'framer-motion';
import { Factory, DollarSign, Leaf } from 'lucide-react';

const products = [
  {
    name: 'Crude Palm Oil (CPO)',
    price: 'USD 840/ton',
    spec: ['FFA ≤ 5%', 'Moisture ≤ 0.25%', 'Origin: ID/MY'],
    img: 'https://images.unsplash.com/photo-1542736667-069246bdbc74?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'RBD Palm Oil',
    price: 'USD 950/ton',
    spec: ['IV 50–55', 'Color ≤ 3R', 'Food-grade'],
    img: 'https://images.unsplash.com/photo-1567359781514-3b964e2b04de?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'PFAD (Palm Fatty Acid Distillate)',
    price: 'USD 620/ton',
    spec: ['FFA ≥ 70%', 'Biofuel / Oleochem.'],
    img: 'https://images.unsplash.com/photo-1512446816042-444d641267f7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Palm Kernel Oil (PKO)',
    price: 'USD 1,280/ton',
    spec: ['Lauric 48–52%', 'Cosmetics / Food'],
    img: 'https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&w=1200&auto=format&fit=crop',
  },
];

const Products = () => {
  return (
    <section id="products" className="relative w-full bg-white py-16 text-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Products & Pricing</h2>
            <p className="mt-2 max-w-2xl text-neutral-600">
              Export-grade bulk supply with SGS inspection available on request. Flexible contracts (FOB/CIF). Indicative pricing in USD/ton.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-800">
            <DollarSign className="h-4 w-4" /> Competitive & Transparent
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="space-y-3 p-4">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="inline-flex items-center gap-2 rounded-md bg-emerald-50 px-2 py-1 text-sm text-emerald-700">
                  <Factory className="h-4 w-4" /> {p.price}
                </div>
                <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                  {p.spec.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-emerald-500" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
