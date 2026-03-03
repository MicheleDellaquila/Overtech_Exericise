import { useParams } from "react-router-dom";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/containers/ErrorMessage";
import useGetUser from "./useGetUser";
import { GoBack } from "@/containers/GoBack";
import { UserHeader } from "./UserHeader";
import { UserInfoCol } from "./UserInfoCol";
import { UserInfoRow } from "./UserInfoRow";

export function User() {
  const { userId } = useParams();
  const { data, isLoading, isError } = useGetUser(userId);

  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (isError) return <ErrorMessage text="Errore nel caricamento dei dati" />;
    if (!data) return <p className="text-muted">Utente non trovato</p>;

    return (
      <>
        <UserHeader name={data.name} username={data.username} />
        <UserInfoCol title="Contatti">
          <UserInfoRow label="Email" value={data.email} />
          <UserInfoRow label="Telefono" value={data.phone} />
          <UserInfoRow label="Sito web" value={data.website} isLink />
        </UserInfoCol>
        <UserInfoCol title="Indirizzo">
          <UserInfoRow
            label="Via"
            value={`${data.address.street}, ${data.address.suite}`}
          />
          <UserInfoRow label="Città" value={data.address.city} />
          <UserInfoRow label="CAP" value={data.address.zipcode} />
          <UserInfoRow
            label="Coordinate"
            value={`${data.address.geo.lat}, ${data.address.geo.lng}`}
          />
        </UserInfoCol>
        <UserInfoCol title="Azienda">
          <UserInfoRow label="Nome" value={data.company.name} />
          <UserInfoRow label="Slogan" value={data.company.catchPhrase} />
          <UserInfoRow label="Settore" value={data.company.bs} />
        </UserInfoCol>
      </>
    );
  };

  return (
    <main className="container px-4 md:px-0">
      <section className="w-full max-w-3xl mx-auto py-12 px-4 lg:px-0">
        <GoBack />
        {renderContent()}
      </section>
    </main>
  );
}
