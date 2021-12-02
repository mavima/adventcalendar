import React from "react";
// import { StyledDoor } from '../style/DoorStyle';
import Door from './Door';

const DoorGrid = ({doors, handleFlipDoor}) => {
    return (
        <div className="door-grid">
          { doors.map(door => (
          <Door
            door={door}
            key={door.id}
            doorData={door}
            handleClick={handleFlipDoor}
          />
        ))}
      </div>
    )

}

export default DoorGrid;