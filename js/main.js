const research = [
  { title: "Thermal Management of Li-ion Batteries", desc: "Phase change material-based cooling systems for EV battery packs. Funded by DST-SERB (₹45 Lakhs).", link: "#" },
  { title: "Microchannel Heat Exchangers", desc: "CFD optimization of microchannel geometries for high heat flux applications in power electronics.", link: "#" },
  { title: "Solar Thermal Energy Storage", desc: "Latent heat storage using novel PCM composites for concentrated solar power plants.", link: "#" },
  { title: "Additive Manufacturing of Heat Exchangers", desc: "Topology optimization and metal 3D printing of compact heat exchangers for aerospace.", link: "#" },
];

const teaching = [
  { title: "Thermodynamics (ME201)", desc: "Undergraduate core course: Laws of thermodynamics, property relations, power cycles, refrigeration.", link: "#" },
  { title: "Heat Transfer (ME302)", desc: "Conduction, convection, radiation. Analytical and numerical methods. Lab: thermal conductivity measurement.", link: "#" },
  { title: "Computational Fluid Dynamics (ME405)", desc: "Finite volume method, turbulence modeling, OpenFOAM/ANSYS Fluent workshops. Graduate elective.", link: "#" },
  { title: "Renewable Energy Systems (ME510)", desc: "Solar, wind, biomass, geothermal. System design, storage, grid integration. Graduate elective.", link: "#" },
];

const publications = [
  { title: "PCM-enhanced microchannel cooling for high-power electronics", desc: "International Journal of Heat and Mass Transfer, 2023. DOI: 10.1016/j.ijheatmasstransfer.2023.124567", link: "#" },
  { title: "Topology optimization of 3D-printed heat exchangers using lattice structures", desc: "Additive Manufacturing, 2022. DOI: 10.1016/j.addma.2022.102890", link: "#" },
  { title: "Experimental investigation of cascaded PCM storage for CSP plants", desc: "Solar Energy, 2022. DOI: 10.1016/j.solener.2022.05.045", link: "#" },
  { title: "Machine learning surrogate models for thermal design optimization", desc: "ASME Journal of Heat Transfer, 2021. DOI: 10.1115/1.4051234", link: "#" },
];

function populate(gridId, items) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p><a href="${item.link}" target="_blank">Read More &rarr;</a>`;
    grid.appendChild(card);
  });
}

populate("researchGrid", research);
populate("teachingGrid", teaching);
populate("publicationsGrid", publications);