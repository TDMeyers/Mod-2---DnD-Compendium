import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchEquipmentData,
    fetchEquipmentCategoriesData,
    fetchMagicItemsData,
    fetchWeaponPropertiesData,
} from "../../Thunks/Equipment/fetchEquipmentData";
import equipmentSlice from "../../Store/equipmentSlice"; // Assuming you export the equipmentSlice from a separate file.

const DisplayEquipment = () => {
    const dispatch = useDispatch();
    const {
        data,
        categories,
        magicItems,
        weaponProperties,
        loading,
        error,
    } = useSelector((state) => state.equipment);

    useEffect(() => {
        dispatch(fetchEquipmentData("/api/equipment"));
        dispatch(fetchEquipmentCategoriesData("/api/equipment-categories"));
        dispatch(fetchMagicItemsData("/api/magic-items"));
        dispatch(fetchWeaponPropertiesData("/api/weapon-properties"));
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    {data && data.length > 0 ? (
                        data.map((equipmentItem) => (
                            <div key={equipmentItem.index}>
                                <h3>{equipmentItem.name}</h3>
                                {/* Render equipment details here */}
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {categories && categories.length > 0 ? (
                        <div>
                            <h3>Equipment Categories</h3>
                            <ul>
                                {categories.map((category) => (
                                    <li key={category.index}>{category.name}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}

                    {magicItems && magicItems.length > 0 ? (
                        <div>
                            <h3>Magic Items</h3>
                            <ul>
                                {magicItems.map((magicItem) => (
                                    <li key={magicItem.index}>{magicItem.name}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}

                    {weaponProperties && weaponProperties.length > 0 ? (
                        <div>
                            <h3>Weapon Properties</h3>
                            <ul>
                                {weaponProperties.map((property) => (
                                    <li key={property.index}>{property.name}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </>
            )}
        </div>
    );
};

export default DisplayEquipment;
