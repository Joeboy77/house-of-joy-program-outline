import { useState, useEffect } from 'react';
import { Music, Calendar, Clock, Star, Sparkles, Heart, Users, Award, FileText, Image } from 'lucide-react';
import logo1 from '../assets/img/logo1.png';
import image1 from '../assets/img/image.png'; 
import image2 from '../assets/img/image1.png';
import outlinePdf from '../assets/pdf/HOJ.pdf'; 
import outlineImage from '../assets/img/outline.png'; 

const programData = [
  { time: "3:00pm-4:00pm", activity: "Red Carpet/Arrival", icon: Star },
  { time: "4:00pm-4:07pm", activity: "Welcome Address(MC)", icon: Users },
  { time: "4:07pm-4:10pm", activity: "Prayer", icon: Heart },
  { time: "4:10pm-4:15pm", activity: "1st Performance(Soul Street)", icon: Music },
  { time: "4:15pm-4:25pm", activity: "Introduction of dignitaries", icon: Award },
  { time: "4:25pm-4:35pm", activity: "2nd Performance(Manifest)", icon: Music },
  { time: "4:35pm-4:45pm", activity: "3rd Performance(Valley View)", icon: Music },
  { time: "4:45pm-4:55pm", activity: "Purpose of gathering (Ps.Nimako)", icon: Heart },
  { time: "5:00pm-5:30pm", activity: "Host Choir(1st Performance)", icon: Music },
  { time: "5:30pm-6:00pm", activity: "Fundraising/ Valley view", icon: Star },
  { time: "6:00pm-6:10pm", activity: "Host choir", icon: Music },
  { time: "6:10pm-6:40pm", activity: "Alumni homecoming", icon: Users },
  { time: "6:40pm-6:50pm", activity: "4th Performance(Alumni choir)", icon: Music },
  { time: "6:50pm-6:55pm", activity: "Performance (Bennard the Magician)", icon: Sparkles },
  { time: "7:00pm-7:10pm", activity: "5th Performance(Symphonials)", icon: Music },
  { time: "7:10pm-7:40pm", activity: "Host Choir", icon: Music },
  { time: "7:40pm-7:45pm", activity: "Mass Choir", icon: Music },
  { time: "7:45pm-7:50pm", activity: "Vote of thanks(Akua Boahemaa)", icon: Heart },
  { time: "7:50pm-8:00pm", activity: "Closing Prayer", icon: Heart },
  { time: "8:00pm-", activity: "Highlifes.....till you drop", icon: Star }
];

const FloatingElement = ({ children, delay = 0, duration = 3 }: { children: React.ReactNode; delay?: number; duration?: number }) => {
  return (
    <div 
      className="floating-element"
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

const ProgramItem = ({ item, index, isVisible }: { item: any; index: number; isVisible: boolean }) => {
  const IconComponent = item.icon;
  
  return (
    <div 
      className={`program-item ${isVisible ? 'fade-in' : ''}`}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="program-time">
        <Clock size={16} />
        <span>{item.time}</span>
      </div>
      <div className="program-activity">
        <div className="activity-icon">
          <IconComponent size={18} />
        </div>
        <span>{item.activity}</span>
      </div>
    </div>
  );
};

export default function ProgramOutlinePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="house-of-joy-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .house-of-joy-container {
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #111827 0%, #401516 30%, #000000 60%, #1a0033 100%);
          position: relative;
          overflow-x: hidden;
        }

        /* Background Images with Logo */
        .house-of-joy-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            url('${logo1}'), 
            url('${logo1}'), 
            url('${logo1}'),
            url('${image1}'), 
            url('${image2}');
          background-position: 
            15% 20%, 
            85% 80%, 
            50% 50%,
            top left, 
            bottom right;
          background-size: 
            150px 150px, 
            120px 120px, 
            80px 80px,
            600px 400px, 
            600px 400px;
          background-repeat: no-repeat;
          opacity: 0.12;
          z-index: 0;
          filter: blur(1px);
        }

        /* Animated Background Elements */
        .house-of-joy-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(64, 21, 22, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(17, 24, 39, 0.1) 0%, transparent 50%);
          animation: backgroundPulse 10s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes backgroundPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.6),
                        inset 0 0 20px rgba(255, 255, 255, 0.2);
          }
          50% { 
            box-shadow: 0 0 50px rgba(255, 215, 0, 0.8), 
                        0 0 80px rgba(255, 215, 0, 0.4),
                        inset 0 0 20px rgba(255, 255, 255, 0.2);
          }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes borderMove {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        @keyframes downloadPulse {
          0%, 100% { 
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
          }
          50% { 
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.8), 0 0 25px rgba(255, 215, 0, 0.4);
          }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        /* Download Section */
        .download-section {
          position: sticky;
          top: 20px;
          z-index: 10;
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin: 2rem 0;
          padding: 0 2rem;
        }

        .download-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          color: #000;
          border: none;
          padding: 1.2rem 2.2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 
            0 10px 30px rgba(255, 215, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          min-width: 220px;
          justify-content: center;
          animation: downloadPulse 3s ease-in-out infinite;
        }

        .download-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .download-btn:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 
            0 20px 40px rgba(255, 215, 0, 0.6),
            0 5px 15px rgba(0, 0, 0, 0.2);
          background: linear-gradient(135deg, #ffed4e 0%, #ffd700 100%);
        }

        .download-btn:hover::before {
          left: 100%;
        }

        .download-btn:active {
          transform: translateY(-2px) scale(1.02);
        }

        .download-btn svg {
          transition: transform 0.3s ease;
        }

        .download-btn:hover svg {
          transform: scale(1.2) rotate(15deg);
        }

        .pdf-btn {
          background: linear-gradient(135deg, #401516 0%, #111827 100%);
          color: #ffd700;
          border: 2px solid rgba(255, 215, 0, 0.4);
        }

        .pdf-btn:hover {
          background: linear-gradient(135deg, #111827 0%, #401516 100%);
          border-color: rgba(255, 215, 0, 0.8);
          color: #fff;
          box-shadow: 
            0 20px 40px rgba(64, 21, 22, 0.6),
            0 5px 15px rgba(255, 215, 0, 0.3);
        }

        /* Header Section */
        .header-section {
          padding: 2rem;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .main-logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          animation: slideInLeft 1s ease-out;
        }

        .logo-container {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff 0%, #f8f9fa 30%, #401516 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 5px solid rgba(255, 215, 0, 0.8);
          animation: glow 3s ease-in-out infinite;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 0 30px rgba(255, 215, 0, 0.6),
            inset 0 0 20px rgba(255, 255, 255, 0.2);
        }

        .logo-container::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: conic-gradient(from 0deg, #ffd700, #401516, #111827, #ffd700);
          border-radius: 50%;
          z-index: -1;
          animation: rotate 8s linear infinite;
        }

        .logo-image {
          width: 90%;
          height: 90%;
          object-fit: cover;
          border-radius: 50%;
          filter: contrast(1.2) brightness(1.1);
          z-index: 2;
        }

        .title-container {
          text-align: left;
        }

        .main-title {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 900;
          background: linear-gradient(135deg, #ffd700 0%, #ffffff 30%, #401516 60%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
          letter-spacing: -2px;
          position: relative;
        }

        .main-title::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.3), transparent);
          -webkit-background-clip: text;
          pointer-events: none;
          animation: shimmer 3s ease-in-out infinite;
        }

        .subtitle {
          font-size: clamp(1.2rem, 4vw, 2rem);
          color: #fff;
          font-weight: 600;
          margin: 0.5rem 0;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
        }

        .year-badge {
          display: inline-block;
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          color: #000;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-weight: 800;
          font-size: 1.2rem;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
        }

        .event-details {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 2rem 0;
          animation: slideInRight 1s ease-out;
        }

        .detail-card {
          background: linear-gradient(135deg, rgba(64, 21, 22, 0.9), rgba(17, 24, 39, 0.8));
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255, 215, 0, 0.3);
          padding: 1.5rem 2rem;
          border-radius: 20px;
          color: white;
          text-align: center;
          min-width: 220px;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .detail-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .detail-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 215, 0, 0.6);
          box-shadow: 
            0 15px 40px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(255, 215, 0, 0.3);
        }

        .detail-card:hover::before {
          left: 100%;
        }

        .detail-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #ffd700;
        }

        .detail-card p {
          font-size: 1rem;
          font-weight: 600;
        }

        /* Image Section */
        .image-section {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin: 3rem 0;
          flex-wrap: wrap;
        }

        .event-image {
          width: clamp(280px, 40vw, 350px);
          height: clamp(200px, 30vw, 250px);
          border-radius: 20px;
          object-fit: cover;
          border: 4px solid transparent;
          background: linear-gradient(45deg, #401516, #111827) padding-box,
                      linear-gradient(45deg, #ffd700, #401516, #111827, #ffd700) border-box;
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.4),
            0 5px 15px rgba(255, 215, 0, 0.2);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .event-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(255, 215, 0, 0.1) 0%, 
            transparent 30%, 
            transparent 70%, 
            rgba(64, 21, 22, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .event-image:hover {
          transform: scale(1.08) rotate(2deg);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.6),
            0 0 30px rgba(255, 215, 0, 0.4);
        }

        .event-image:hover::before {
          opacity: 1;
        }

        .event-image:nth-child(even):hover {
          transform: scale(1.08) rotate(-2deg);
        }

        /* Program Section */
        .program-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          z-index: 2;
        }

        .program-header {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .program-title {
          font-size: 3rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        .program-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #ffd700, #fff, #ffd700);
          border-radius: 2px;
        }

        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-icon {
          position: absolute;
          color: rgba(255, 215, 0, 0.3);
        }

        .floating-icon:nth-child(1) { top: 10%; left: 10%; }
        .floating-icon:nth-child(2) { top: 20%; right: 15%; }
        .floating-icon:nth-child(3) { bottom: 30%; left: 20%; }
        .floating-icon:nth-child(4) { bottom: 20%; right: 10%; }

        /* Program Timeline */
        .program-timeline {
          background: linear-gradient(135deg, 
            rgba(17, 24, 39, 0.95) 0%, 
            rgba(64, 21, 22, 0.85) 50%, 
            rgba(0, 0, 0, 0.9) 100%);
          backdrop-filter: blur(25px);
          border: 2px solid rgba(255, 215, 0, 0.2);
          border-radius: 30px;
          padding: 3rem 2rem;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .program-timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent, 
            #ffd700, 
            #401516, 
            #111827, 
            #ffd700, 
            transparent);
          animation: borderMove 4s ease-in-out infinite;
        }

        .program-item {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1.5rem 1rem;
          border-bottom: 1px solid rgba(255, 215, 0, 0.2);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
          border-radius: 15px;
          margin-bottom: 0.5rem;
        }

        .program-item:last-child {
          border-bottom: none;
        }

        .program-item.fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .program-item:hover {
          background: linear-gradient(90deg, 
            rgba(255, 215, 0, 0.05), 
            rgba(64, 21, 22, 0.1), 
            rgba(17, 24, 39, 0.1));
          transform: translateX(10px);
          border-left: 4px solid #ffd700;
        }

        .program-time {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 200px;
          color: #ffd700;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .program-activity {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          color: white;
          font-weight: 500;
        }

        .activity-icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffd700 0%, #401516 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
          transition: all 0.3s ease;
        }

        .program-item:hover .activity-icon {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.5);
        }

        /* Footer */
        .footer-section {
          text-align: center;
          padding: 2rem;
          color: rgba(255, 255, 255, 0.8);
          position: relative;
          z-index: 2;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 1rem 0;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffd700;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          background: #ffd700;
          color: #333;
          transform: scale(1.1);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .main-logo-container {
            gap: 1.5rem;
          }
          
          .program-item {
            gap: 1.5rem;
          }
          
          .image-section {
            gap: 2rem;
          }

          .download-section {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 0 1rem;
          }

          .download-btn {
            min-width: 180px;
            padding: 1rem 2rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .main-logo-container {
            flex-direction: column;
            gap: 1.5rem;
          }

          .title-container {
            text-align: center;
          }

          .main-title {
            font-size: clamp(2rem, 10vw, 3rem);
          }

          .subtitle {
            font-size: clamp(1rem, 5vw, 1.5rem);
          }

          .event-details {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .detail-card {
            min-width: 280px;
            padding: 1.2rem 1.5rem;
          }

          .image-section {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }

          .event-image {
            width: clamp(250px, 80vw, 320px);
            height: clamp(180px, 60vw, 240px);
          }

          .program-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.2rem;
          }

          .program-time {
            min-width: auto;
            justify-content: center;
            width: 100%;
          }

          .program-activity {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .program-timeline {
            padding: 2rem 1rem;
          }

          .header-section {
            padding: 1.5rem 1rem;
          }

          .program-section {
            padding: 1.5rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .logo-container {
            width: 100px;
            height: 100px;
          }

          .main-title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.2rem;
          }

          .year-badge {
            font-size: 1rem;
            padding: 0.4rem 1rem;
          }

          .detail-card {
            min-width: 240px;
            padding: 1rem;
          }

          .event-image {
            width: 90vw;
            height: 60vw;
            max-width: 300px;
            max-height: 200px;
          }

          .program-item {
            padding: 1rem;
          }

          .activity-icon {
            width: 35px;
            height: 35px;
          }

          .floating-icon {
            display: none;
          }

          .download-section {
            flex-direction: column;
            align-items: center;
            gap: 0.8rem;
            padding: 0 0.5rem;
          }

          .download-btn {
            min-width: 160px;
            padding: 0.8rem 1.5rem;
            font-size: 0.85rem;
          }
        }
      `}</style>

      {/* Download Section */}
      <div className="download-section">
        <button 
          className="download-btn"
          onClick={() => handleDownload(outlinePdf, 'House-of-Joy-2025-Program.pdf')}
          title="Download PDF Version"
        >
          <FileText size={22} />
          Download Outline PDF
        </button>
        <button 
          className="download-btn pdf-btn"
          onClick={() => handleDownload(outlineImage, 'House-of-Joy-2025-Outline.jpg')}
          title="Download Image Version"
        >
          <Image size={22} />
          Download Outline Image
        </button>
      </div>

      {/* Floating Background Icons */}
      <div className="floating-icons">
        <FloatingElement delay={0} duration={4}>
          <div className="floating-icon" style={{ top: '10%', left: '10%' }}>
            <Music size={40} />
          </div>
        </FloatingElement>
        <FloatingElement delay={1} duration={5}>
          <div className="floating-icon" style={{ top: '20%', right: '15%' }}>
            <Star size={35} />
          </div>
        </FloatingElement>
        <FloatingElement delay={2} duration={3.5}>
          <div className="floating-icon" style={{ bottom: '30%', left: '20%' }}>
            <Sparkles size={30} />
          </div>
        </FloatingElement>
        <FloatingElement delay={1.5} duration={4.5}>
          <div className="floating-icon" style={{ bottom: '20%', right: '10%' }}>
            <Heart size={25} />
          </div>
        </FloatingElement>
      </div>

      {/* Header Section */}
      <div className="header-section">
        <div className="main-logo-container">
          <div className="logo-container">
            <img src={logo1} alt="House of Joy Logo" className="logo-image" />
          </div>
          <div className="title-container">
            <h1 className="main-title">HOUSE</h1>
            <h2 className="subtitle">OF JOY</h2>
            <div className="year-badge">2025</div>
          </div>
        </div>

        <div className="event-details">
          <div className="detail-card">
            <h3><Calendar size={20} style={{ display: 'inline', marginRight: '8px' }} />Date</h3>
            <p>2 August 2025</p>
          </div>
          <div className="detail-card">
            <h3><Clock size={20} style={{ display: 'inline', marginRight: '8px' }} />Time</h3>
            <p>3:00 PM - 8:00 PM</p>
          </div>
        </div>
      </div>

      {/* Program Section */}
      <div className="program-section">
        <div className="program-header">
          <h2 className="program-title">Program Outline</h2>
        </div>

        <div className="program-timeline">
          {programData.map((item, index) => (
            <ProgramItem 
              key={index} 
              item={item} 
              index={index} 
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        <div className="social-icons">
          <div className="social-icon">🎵</div>
          <div className="social-icon">📺</div>
          <div className="social-icon">📷</div>
          <div className="social-icon">📱</div>
        </div>
        <p>Follow us for updates and behind-the-scenes content!</p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
          © House of Joy 2025 - A Night of Worship, Music & Community
        </p>
      </div>
    </div>
  );
}