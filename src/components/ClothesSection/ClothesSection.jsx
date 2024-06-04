import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../Main/ItemCard";

function ClothesSection({ onCardClick, clothingItems, openItemModal }) {
  return (
    <div className="clothes-section">
      <div className="clothes-info">
        <p className="clothes-section-title">Your Items</p>
        <button
          className="clothes-add-button"
          type="button"
          onClick={openItemModal}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
