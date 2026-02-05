export interface Draw {
  id: string
  title: string
  timer: string // Formatting could be handled by a utility, storing raw end time might be better but string is fine for mock
  prize: string
  ticketPrice: number
  participants: number
  totalTickets: number // For progress calculation if needed, or just hardcode progress
  progress: number // Percentage
  winnerShare: string
}

export const draws: Draw[] = [
  {
    id: '15min',
    title: '15 Minute Draw',
    timer: '03:54',
    prize: '₺17,650',
    ticketPrice: 100,
    participants: 220,
    totalTickets: 270,
    progress: 82,
    winnerShare: '₺14,120',
  },
  {
    id: '30min',
    title: '30 Minute Draw',
    timer: '12:45',
    prize: '₺45,000',
    ticketPrice: 200,
    participants: 105,
    totalTickets: 300,
    progress: 35,
    winnerShare: '₺36,000',
  },
  {
    id: '1hour',
    title: '1 Hour Draw',
    timer: '54:10',
    prize: '₺120,000',
    ticketPrice: 500,
    participants: 450,
    totalTickets: 1000,
    progress: 45,
    winnerShare: '₺96,000',
  },
]
