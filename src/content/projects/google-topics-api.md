---
title: "Google Topics API Privacy Audit"
paper_title: "Inferring Users' Demographics and Sensitive Interests Using the Topics API"
description: "Measured whether Google's Topics API can be abused to infer users' demographics and sensitive interests from browsing history. Found predictive signals in 17 of 19 traits."
venue: "WWW 2026"
year: 2026
authors: "Athicha Srivirote, Muhammad Abu Bakar Aziz, Jeffrey Gleason, Desheng Hu, Christo Wilson"
tech: ["Python", "Machine Learning", "Web Measurement", "Data Analysis"]
paper: "/assets/pdf/google-topics-www26.pdf"
---

Google's Privacy Sandbox Topics API maps users' browsing history to commercially-focused topics shared with advertisers. We investigated whether this API can be abused to infer demographics and sensitive interests.

Using a real-world dataset of browsing histories containing over 250,000 unique domains, we trained ML models that take Topics API output as input. Of 19 demographic traits and sensitive interests evaluated, all but two show predictive signals — adding to the evidence that Topics API is privacy-revealing, not privacy-preserving.
