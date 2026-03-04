import { useParams } from "react-router-dom";
import { ErrorMessage } from "@/containers/ErrorMessage";
import { GoBack } from "@/containers/GoBack";
import { UserProfile } from "@/components/UserProfile";
import { UserInfoCol } from "./UserInfoCol";
import { UserInfoRow } from "./UserInfoRow";
import { PageLoading } from "@/containers/PageLoading";
import useGetUser from "@/hook/useGetUser";

export function User() {
  const { userId } = useParams();
  const { data: user, isLoading, isError } = useGetUser(userId);

  if (isLoading) return <PageLoading />;
  if (isError || !user)
    return <ErrorMessage text="Errore nel caricamento dei dati" />;

  return (
    <main className="container px-4 md:px-0">
      <section className="w-full max-w-3xl mx-auto py-12 px-4 lg:px-0">
        <div className="mb-12">
          <GoBack />
        </div>
        <UserProfile name={user.name} username={user.username} />
        <UserInfoCol title="Contatti">
          <UserInfoRow label="Email" value={user.email} />
          <UserInfoRow label="Telefono" value={user.phone} />
          <UserInfoRow label="Sito web" value={user.website} isLink />
        </UserInfoCol>
        <UserInfoCol title="Indirizzo">
          <UserInfoRow
            label="Via"
            value={`${user.address.street}, ${user.address.suite}`}
          />
          <UserInfoRow label="Città" value={user.address.city} />
          <UserInfoRow label="CAP" value={user.address.zipcode} />
          <UserInfoRow
            label="Coordinate"
            value={`${user.address.geo.lat}, ${user.address.geo.lng}`}
          />
        </UserInfoCol>
        <UserInfoCol title="Azienda">
          <UserInfoRow label="Nome" value={user.company.name} />
          <UserInfoRow label="Slogan" value={user.company.catchPhrase} />
          <UserInfoRow label="Settore" value={user.company.bs} />
        </UserInfoCol>
      </section>
    </main>
  );
}
