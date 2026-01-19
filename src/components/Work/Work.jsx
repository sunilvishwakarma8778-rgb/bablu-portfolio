import React from "react";
import { FaGooglePlay,  } from "react-icons/fa";

const Work = () => {
  // ✅ आपके 8 Apps (Play Store Links)
  const apps = [
    {
      id: 1,
      title: "Buddha App",
      description: "Android app available on Google Play Store.",
      playstore:
        "https://play.google.com/store/apps/details?id=com.aurget.buddha",
    },
    {
      id: 2,
      title: "PGRS App",
      description: "Public Grievances Redressal System mobile application.",
      playstore:
        "https://play.google.com/store/apps/details?id=com.customer.pgrs",
    },
    {
      id: 3,
      title: "SUDA App",
      description: "Complaint and grievance app for SUDA services.",
      playstore:
        "https://play.google.com/store/apps/details?id=com.customer.suda",
    },
    {
      id: 4,
      title: "City Bus App",
      description: "Public transport city bus app on Play Store.",
      playstore:
        "https://play.google.com/store/apps/details?id=com.ramainfotech.citybus",
    },
    {
      id: 5,
      title: "Panzura Mobile",
      description: "File and folder management app.",
      playstore:
        "https://play.google.com/store/apps/details?id=com.droid.PanzuraMobile3",
    },
    {
      id: 6,
      title: "Lucknow Cares",
      description: "Citizen complaint & service app.",
      playstore:
        "https://play.google.com/store/apps/details?id=com.ramainfotech.kctsl",
    },
    {
      id: 7,
      title: "UP Transport",
      description: "Transport complaint/service app.",
      playstore:
        "https://play.google.com/store/apps/details?id=com.customer.uptransport2",
    },
    {
      id: 8,
      title: "DM Lucknow",
      description: "District administration complaint app.",
      playstore:
        "https://play.google.com/store/apps/details?id=com.customer.dmlko",
    },
     {
      id: 9,
      title: "Hello Kisan",
      description: "District administration complaint app.",
      playstore:
        "https://apps.apple.com/us/app/hello-kisan-i-wrd-helpline/id1581968240",
    },
     {
      id: 10,
      title: "UP Transport iOS",
      description: "District administration complaint app.",
      playstore:
        "https://apps.apple.com/us/app/up-transport/id1291675313",
    },
  ];

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        </div>
      </div>

      {/* ✅ Apps Grid (Click => Play Store Redirect) */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <a
            key={app.id}
            href={app.playstore}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{app.title}</h3>
                <FaGooglePlay className="text-green-500 text-2xl" />
              </div>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {app.description}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-400">
                Open on Play Store →
              </div>
            </div>
          </a>
        ))}
      </div>

     
    </section>
  );
};

export default Work;
