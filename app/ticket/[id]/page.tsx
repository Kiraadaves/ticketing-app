import TicketForm from "@/app/(components)/TicketForm";

interface TicketPageProps {
  params: {
    id: string;
  };
}

const TicketPage: React.FC<TicketPageProps> = ({ params }) => {
  
  return <TicketForm />;
};

export default TicketPage;
