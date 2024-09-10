import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from '../context/TranslationContext';

const NotificationItem = ({ notification }) => {
   

    return (
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-2">
        <div>
          <h3 className="text-sm font-semibold">{notification.title}</h3>
          <p className="text-xs text-gray-600">{notification.description}</p>
        </div>
        <span className="text-xs text-gray-500">{notification.time}</span>
      </div>
    );
  };
function Notification() {
  const { t } = useTranslation();
    const notifications = t("notificationsItem")

 
  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
    <div className="mb-6">
      <Image
        src="/noti.png" // Replace with actual image path
        alt="App promotion"
        width={500}
        height={250}
        className="rounded-lg"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold"> {t("notifications")} </h2>
        <p className="text-xs text-gray-600">
          List and shop and easier than on web (and unlock the lastest features).
        </p>
      </div>
      <div className="flex mt-4 space-x-2">
        <Image
          src="/app.png" // Replace with actual image path
          alt="App Store"
          width={120}
          height={40}
          className="object-contain"
        />
        <Image
          src="/not.png" // Replace with actual image path
          alt="Google Play"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>
    </div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold"> {t("new")} </h2>
      <button className="text-sm text-blue-500 hover:underline">{t("Mark as read")}</button>
    </div>
    <div>
      {notifications.map((notification, index) => (
        <NotificationItem key={index} notification={notification} />
      ))}
    </div>
  </div>
  )
}

export default Notification