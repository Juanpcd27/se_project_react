import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({
  onCardClick,
  clothingItems,
  openItemModal,
  closeModal,
  onAddItem,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          openItemModal={openItemModal}
          closeModal={closeModal}
          onAddItem={onAddItem}
        />
      </section>
    </div>
  );
}

export default Profile;
