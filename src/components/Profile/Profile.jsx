import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({
  onCardClick,
  clothingItems,
  openItemModal,
  closeModal,
  onAddItem,
  isLoggedIn,
  handleLogout,
  openEditModal,
  handleCardLike,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleLogout={handleLogout} openEditModal={openEditModal} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          openItemModal={openItemModal}
          closeModal={closeModal}
          onAddItem={onAddItem}
          isLoggedIn={isLoggedIn}
          handleCardLike={handleCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
