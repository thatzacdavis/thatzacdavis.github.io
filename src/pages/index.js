import React from 'react';
import Layout from '../components/layout';

import Headshot from '../../static/headshot.jpg';

function IndexPage() {
  return (
    <Layout>
      <section className="text-center">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              src={Headshot}
              alt="Zac Davis' Headshot"
              className="rounded-full h-64"
            />
          </div>
          <div className="flex flex-wrap content-center">
            <h2 className="w-full p-3 mb-4 text-2xl font-bold bg-teal-200">
              Zac Davis
            </h2>
            <h2 className="w-full p-3 mb-4 text-2xl font-bold bg-teal-200 italic">
              Senior Software Engineer
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
