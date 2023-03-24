import React from 'react'
import { Failure } from '../../../types/launch';
import ButtonOutline from '../buttons/Button'

interface IRocketCard {
  number: string;
  name: string;
  date_utc: string;
  cores: string;
  id: string;
  payloads: string;
  image: string;
  isSuccess: boolean;
  onClick: () => void;
  failure?: Array<Failure>;
}

const RocketCard: React.FC<IRocketCard> = ({ number, name, cores, date_utc, id, image, isSuccess, onClick, payloads, failure }) => {
  console.log('x', failure);
  return (
    <div className="flex flex-col md:flex-row justify-between my-10">
      <div className="flex flex-row">
        <h2 className="font-AbrilFatface text-5xl text-white mr-6">{number}</h2>
        <div className="flex flex-col">
          <h2 className="font-AbrilFatface text-5xl text-white mb-4">{name}</h2>
          <h4 className="font-Rajdhani text-white text-2xl">ID : {id}</h4>
          <h4 className="font-Rajdhani text-white text-2xl">Payloads : {payloads}</h4>
          <h4 className="font-Rajdhani text-white text-2xl">Date: {date_utc}</h4>
          <h4 className="font-Rajdhani text-white text-2xl">Cores : {cores ?? '-'}</h4>
          <h4 className="font-Rajdhani text-white text-2xl">Status : {isSuccess ? 'SUCCESS 🚀' : 'FAILURE 🚩'}</h4>
          {!isSuccess && <h4 className="font-Rajdhani text-white text-2xl">Reason of failure : {failure && failure.length > 0 ? '' : 'No Description'}</h4>}
          {failure?.map((fail, index) => {
            return (
              <div key={index} className="flex-1 px-8" data-testid="Test-Failure">
                <p className="font-Rajdhani text-white text-2xl">🔴 Reason : {fail.reason}</p>
                <p className="font-Rajdhani text-white text-2xl">🔴 Altitude: {fail.altitude ?? '-'}</p>
                <p className="font-Rajdhani text-white text-2xl">🔴 Time: {fail.time}</p>
              </div>
            )
          })}
        </div>
      </div>

      <img
        data-testid="Test-Image"
        src={image.length > 0 ? image : 'https://www.spacex.com/static/images/share.jpg'}
        className="w-24 h-24"
      />
    </div>
  )
}

export default RocketCard;
