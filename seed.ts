import { Prisma, PrismaClient } from "@Prisma/client";

const client = new PrismaClient();

const getbooks = (): Prisma.booksCreateInput[] => [
  {
    book_id: "0000",
    book_name: "Harry potter",
    book_type: "New",
    price: "456",
    price_id: "1234",
    availabe_for: "Sell",
    category: "Fiction",
    publisher: "Scholastic",
    author_name: "Joanne Rowling",
    description:
      "The novels of whom are students at Hogwarts School of Witchcraft and Wizardry. ",
    image: "jpeg",
    ratings: "5",
    language: "English",
    discount: "10%",
    readlist: "Favourite",
  },
];
