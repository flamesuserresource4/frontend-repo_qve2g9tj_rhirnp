import React from 'react';
import Hero3D from './components/Hero3D.jsx';
import Products from './components/Products.jsx';
import Sustainability from './components/Sustainability.jsx';
import Logistics from './components/Logistics.jsx';
import { Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900">
      <Hero3D />
      <Products />
      <Sustainability />
      <Logistics />

      {/* Contact / Footer */}
      <footer id="contact" className="w-full bg-neutral-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-lg font-semibold">Palm Global Commodities</h4>
              <p className="mt-2 max-w-sm text-sm text-neutral-300">
                Exporters of Premium CPO, RBD Palm Oil, PFAD, and PKO. Sustainable supply from Indonesia & Malaysia with global reach.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-neutral-200">Contact</h5>
              <ul className="mt-2 space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-amber-300" /> trade@palm-global.example</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber-300" /> +65 6000 8000</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-300" /> Singapore • Jakarta • Kuala Lumpur</li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-neutral-200">Quick Links</h5>
              <ul className="mt-2 space-y-2 text-sm text-neutral-300">
                <li><a className="hover:text-white" href="#products">Products</a></li>
                <li><a className="hover:text-white" href="#sustainability">Sustainability</a></li>
                <li><a className="hover:text-white" href="#logistics">Logistics</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-neutral-400">
            © {new Date().getFullYear()} Palm Global Commodities. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
