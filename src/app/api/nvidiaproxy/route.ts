// /pages/api/nvidiaProxy.js

// import axios from 'axios';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Only POST requests are allowed' });
//   }

//   const { numMolecules, minSimilarity, particles, iterations, smiles } = req.body;

//   const API_KEY = "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";
//   const invokeUrl = "https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate";

//   try {
//     const payload = {
//       algorithm: "CMA-ES",
//       num_molecules: parseInt(numMolecules),
//       property_name: "QED",
//       minimize: false,
//       min_similarity: parseFloat(minSimilarity),
//       particles: parseInt(particles),
//       iterations: parseInt(iterations),
//       smi: smiles,
//     };

//     const response = await axios.post(invokeUrl, payload, {
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     });

//     // Send the API response back to the client
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error("Error with NVIDIA API:", error.message);
//     res.status(500).json({ message: "Error fetching data from NVIDIA API" });
//   }
// }

// app/api/send-verification-email/route.ts

import axios from 'axios';
export async function POST(request: Request) {
 
    // const { numMolecules, minSimilarity, particles, iterations, smiles } = await request.json();
    const payload = await request.json();
    
  const API_KEY = "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";
  const invokeUrl = "https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate";
    try {
  
     const response = await fetch(invokeUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
          'Content-Type': "application/json",
        },
        body: payload,
     });
        console.log(await response.json());
        const data = await response.json();
    return new Response(data, { status: 200 });
  } catch (error: any) {
    console.log(error.message);

    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
