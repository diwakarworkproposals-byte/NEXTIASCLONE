export const batchPrograms = [
  { id: "gs", name: "GS Pre-cum-Main Foundation" },
  { id: "gs-csat", name: "GS + CSAT Foundation" },
  { id: "gs-opt", name: "GS + Optional Foundation" },
  { id: "gs-csat-opt", name: "GS + CSAT + Optional Foundation" },
  { id: "gs-cava", name: "GS + Current Affairs (CA-VA)" },
];

export const centresList = [
  { id: "delhi-orn", name: "New Delhi (Old Rajinder Nagar)" },
  { id: "delhi-mn", name: "New Delhi (Mukherjee Nagar)" },
  { id: "jaipur", name: "Jaipur Centre (Tonk Road)" },
  { id: "prayagraj", name: "Prayagraj Centre (Civil Lines)" }
];

export const batchesSchedule = {
  "gs": [
    {
      id: "b-gs-1",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Vivekananda House)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "16th March, 2026",
      fee: 147457,
      gst: 26542,
      totalFee: 174000,
      status: "Admissions Open",
      seatsLeft: 18,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-gs-2",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Pusa Road)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "3rd September, 2026",
      fee: 147457,
      gst: 26542,
      totalFee: 174000,
      status: "Admissions Open",
      seatsLeft: 34,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-gs-3",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Vivekananda House)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "15th October, 2026",
      fee: 152543,
      gst: 27457,
      totalFee: 180000,
      status: "Registering Now",
      seatsLeft: 42,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-gs-4",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Pusa Road)",
      time: "6:00 PM - 9:00 PM",
      slot: "Evening",
      date: "19th November, 2026",
      fee: 152543,
      gst: 27457,
      totalFee: 180000,
      status: "Upcoming",
      seatsLeft: 50,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-gs-mn-1",
      centre: "delhi-mn",
      venue: "Mukherjee Nagar Centre (Batra Cinema Complex)",
      time: "8:30 AM - 11:30 AM",
      slot: "Morning",
      date: "25th March, 2026",
      fee: 147457,
      gst: 26542,
      totalFee: 174000,
      status: "Admissions Open",
      seatsLeft: 22,
      mode: "Offline Classroom"
    },
    {
      id: "b-gs-jpr-1",
      centre: "jaipur",
      venue: "Jaipur Centre (Tonk Road, Gopalpura)",
      time: "9:00 AM - 12:00 PM",
      slot: "Morning",
      date: "20th March, 2026",
      fee: 135000,
      gst: 24300,
      totalFee: 159300,
      status: "Admissions Open",
      seatsLeft: 25,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-gs-pry-1",
      centre: "prayagraj",
      venue: "Prayagraj Centre (Civil Lines)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "22nd March, 2026",
      fee: 135000,
      gst: 24300,
      totalFee: 159300,
      status: "Admissions Open",
      seatsLeft: 30,
      mode: "Offline & Live-Online"
    }
  ],

  "gs-csat": [
    {
      id: "b-csat-1",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Vivekananda House)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "16th March, 2026",
      fee: 147457,
      gst: 26542,
      totalFee: 174000,
      status: "Admissions Open",
      seatsLeft: 14,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-csat-2",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Pusa Road)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "3rd September, 2026",
      fee: 155933,
      gst: 28067,
      totalFee: 184000,
      status: "Registering Now",
      seatsLeft: 29,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-csat-3",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Pusa Road)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "15th October, 2026",
      fee: 161017,
      gst: 28983,
      totalFee: 190000,
      status: "Upcoming",
      seatsLeft: 45,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-csat-4",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Vivekananda House)",
      time: "6:00 PM - 9:00 PM",
      slot: "Evening",
      date: "19th November, 2026",
      fee: 161017,
      gst: 28983,
      totalFee: 190000,
      status: "Upcoming",
      seatsLeft: 50,
      mode: "Offline & Live-Online"
    }
  ],

  "gs-opt": [
    {
      id: "b-opt-1",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Vivekananda House)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "16th March, 2026",
      fee: 147457,
      gst: 26542,
      totalFee: 174000,
      status: "Admissions Open",
      seatsLeft: 12,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-opt-2",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Pusa Road)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "3rd September, 2026",
      fee: 194068,
      gst: 34932,
      totalFee: 229000,
      status: "Admissions Open",
      seatsLeft: 26,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-opt-3",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Pusa Road)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "15th October, 2026",
      fee: 199153,
      gst: 35847,
      totalFee: 235000,
      status: "Upcoming",
      seatsLeft: 38,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-opt-4",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Vivekananda House)",
      time: "6:00 PM - 9:00 PM",
      slot: "Evening",
      date: "19th November, 2026",
      fee: 199153,
      gst: 35847,
      totalFee: 235000,
      status: "Upcoming",
      seatsLeft: 45,
      mode: "Offline & Live-Online"
    }
  ],

  "gs-csat-opt": [
    {
      id: "b-combo-1",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Vivekananda House)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "16th March, 2026",
      fee: 147457,
      gst: 26542,
      totalFee: 174000,
      status: "Admissions Open",
      seatsLeft: 9,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-combo-2",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Pusa Road)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "3rd September, 2026",
      fee: 202543,
      gst: 36457,
      totalFee: 239000,
      status: "Registering Now",
      seatsLeft: 20,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-combo-3",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Pusa Road)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "15th October, 2026",
      fee: 207628,
      gst: 37372,
      totalFee: 245000,
      status: "Upcoming",
      seatsLeft: 35,
      mode: "Offline & Live-Online"
    }
  ],

  "gs-cava": [
    {
      id: "b-cava-1",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Vivekananda House)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "3rd September, 2026",
      fee: 160170,
      gst: 28830,
      totalFee: 189000,
      status: "Admissions Open",
      seatsLeft: 24,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-cava-2",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Pusa Road)",
      time: "8:00 AM - 11:00 AM",
      slot: "Morning",
      date: "15th October, 2026",
      fee: 165255,
      gst: 29745,
      totalFee: 195000,
      status: "Registering Now",
      seatsLeft: 31,
      mode: "Offline & Live-Online"
    },
    {
      id: "b-cava-3",
      centre: "delhi-orn",
      venue: "Old Rajinder Nagar (Vivekananda House)",
      time: "6:00 PM - 9:00 PM",
      slot: "Evening",
      date: "19th November, 2026",
      fee: 165255,
      gst: 29745,
      totalFee: 195000,
      status: "Upcoming",
      seatsLeft: 40,
      mode: "Offline & Live-Online"
    }
  ]
};
