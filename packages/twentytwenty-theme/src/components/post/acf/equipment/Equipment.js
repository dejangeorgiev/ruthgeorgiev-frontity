import React from 'react';
import {connect, styled} from "frontity";
import EquipmentItem from './EquipmentItem'

const Equipment = ({state, id}) => {

    const post = state.source.post[id];

    const Equipment = post.acf['postfieldgroup.equipment'];

    return (
        Equipment.map((equipment, index) => {
                return (
                    <EquipmentItem
                        key={index}
                        name={equipment['postfieldgroup.equipment.name']}
                        description={equipment['postfieldgroup.equipment.description']}
                        link={equipment['postfieldgroup.equipment.link']}
                    />
                )
            }
        )
    );
};

export default connect(Equipment);
