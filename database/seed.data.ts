
interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}


export const seedData: SeedData  = {
  entries: [
    {
      description: "Pendiente Entrie description",
      createdAt: Date.now(),
      status: "pending"
    },
    {
      description: "Progreso Entrie description",
      createdAt: Date.now() - 100000,
      status: "in-progress"
    },
    {
      description: "Finalizada Entrie description",
      createdAt: Date.now(),
      status: "finished"
    }
  ]
}