import { useState } from "react";
import Image from "next/image";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";

const mockData = [
  // Bills Splitter
  { id: 1, img: "/images/figma/billspliter/LoginScreen.png" },
  { id: 1, img: "/images/figma/billspliter/Profile.png" },
  { id: 1, img: "/images/figma/billspliter/Mainscreen.png" },
  { id: 1, img: "/images/figma/billspliter/Press Add.png" },
  { id: 1, img: "/images/figma/billspliter/Email.png" },
  { id: 1, img: "/images/figma/billspliter/FriendList.png" },
  { id: 1, img: "/images/figma/billspliter/Notifcation.png" },
  { id: 1, img: "/images/figma/billspliter/Create Tracking.png" },
  { id: 1, img: "/images/figma/billspliter/Add Friend.png" },
  { id: 1, img: "/images/figma/billspliter/Accept or Decline.png" },

  // Ferry Shuttle Booking System
  { id: 2, img: "/images/figma/bookings/bookings.png" },
  { id: 2, img: "/images/figma/bookings/home.png" },
  { id: 2, img: "/images/figma/bookings/information.png" },
  { id: 2, img: "/images/figma/bookings/login.png" },
  { id: 2, img: "/images/figma/bookings/newSchedule.png" },
  { id: 2, img: "/images/figma/bookings/register.png" },
  { id: 2, img: "/images/figma/bookings/rfid.png" },
  { id: 2, img: "/images/figma/bookings/schedules.png" },
  { id: 2, img: "/images/figma/bookings/selectSchedules.png" },
  { id: 2, img: "/images/figma/bookings/users.png" },

  // Music Player
  { id: 3, img: "/images/figma/musicplayer/home.png" },
  { id: 3, img: "/images/figma/musicplayer/playlist.png" },
  { id: 3, img: "/images/figma/musicplayer/music.png" },
  { id: 3, img: "/images/figma/musicplayer/playlist.png" },
  { id: 3, img: "/images/figma/musicplayer/schedule.png" },

  // Tourism
  { id: 4, img: "/images/figma/tourism/landing.png" },
  { id: 4, img: "/images/figma/tourism/gallery.png" },
  { id: 4, img: "/images/figma/tourism/services.png" },
  { id: 4, img: "/images/figma/tourism/rentals.png" },
  { id: 4, img: "/images/figma/tourism/billing.png" },
  { id: 4, img: "/images/figma/tourism/rentalInfo.png" },
  { id: 4, img: "/images/figma/tourism/confirmation.png" },
  { id: 4, img: "/images/figma/tourism/status.png" },
  { id: 4, img: "/images/figma/tourism/checkout.png" },

  // Inventory
  { id: 5, img: "/images/figma/inventory/add.png" },
  { id: 5, img: "/images/figma/inventory/order.png" },
  { id: 5, img: "/images/figma/inventory/history.png" },
];

const Projects = ({
  projectId,
  onClose,
}: {
  projectId: number;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Filter images by project ID
  const projectImages = mockData.filter((item) => item.id === projectId);
  if (projectImages.length === 0) {
    return null;
  }

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-transparent backdrop-blur-sm p-0 w-full max-w-4xl h-[80vh] sm:h-[85vh] md:h-[90vh]">
        <DialogTitle className="sr-only">Gallery Modal</DialogTitle>

        <DialogClose asChild>
          <button
            aria-label="Close"
            className="absolute top-4 right-4 z-50 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </DialogClose>

        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={projectImages[currentIndex].img}
            alt={`Gallery item ${currentIndex + 1}`}
            fill
            className="object-contain rounded-2xl"
          />

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Projects;
