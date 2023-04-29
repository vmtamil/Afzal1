import { Prisma, PrismaClient } from "@Prisma/client";

const client = new PrismaClient();

const getevents = (): Prisma.eventsCreateInput[] => [
  {
    event_id : "0001",
    name  : "xyz",
    duration : "2 hours",
    location : "Mysore",
    organiser_details :"xyz",
    organiser_details_id : "001",
  },
];

[
    {
      event_id : "0002",
      name  : "Abc",
      duration : "3 hours",
      location : "Bangalore",
      organiser_details :"Abc",
      organiser_details_id : "002",
    },
  ];

  [
    {
      event_id : "0003",
      name  : "Efg",
      duration : "6 hours",
      location : "Telengana",
      organiser_details :"Efg",
      organiser_details_id : "003",
    },
  ];

  [
    {
      event_id : "0004",
      name  : "SSS",
      duration : "3 hours",
      location : "Darvard",
      organiser_details :"SSS",
      organiser_details_id : "004",
    },
  ];

  [
    {
      event_id : "0005",
      name  : "SRR",
      duration : "7 hourss",
      location : "Hydrabad",
      organiser_details :"SRR",
      organiser_details_id : "005",
    },
  ];