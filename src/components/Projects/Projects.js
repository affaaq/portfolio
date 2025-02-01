import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  const projectData = [
    {
      imgPath: require("../../Assets/pos.webp"),
      isBlog: false,
      title: "Point of Sale",
      ghLink: "https://play.google.com/store/apps/details?id=com.dwcit.shopzy",
      description:
        "Facilitate all retail and Food & Beverages with complete management solution.Shopzy POS is complete solution where you can manage Inventory, employee’s productivity, enhance better utilization of resources, reports and much more.",
    },
    {
      imgPath: require("../../Assets/samsung_smart.webp"),
      isBlog: false,
      title: "Samsung Smart View",
      ghLink: "https://play.google.com/store/apps/details?id=com.casttotv.screenmirroring.smartview.smarttvlcd",
      description:
        "Smart view and Screen share to samsung tv works with Miracast and ChromeCast enables you to screen sharing, display smartphone mobile screen and videos on Tvs and tv boxes.Smart View Screen Sharing App also works with chromecast, share screen on roku tv and Samsung Smart View that instantly share screen from your mobile phone to Smart Tvs and android tvs.",
    },
    {
      imgPath: require("../../Assets/every_scan.jpeg"),
      isBlog: false,
      title: "EveryScan: Identify Everything",
      ghLink: "https://play.google.com/store/apps/details?id=com.image.search.aitool.imagefinder&hl=en&gl=US",
      description:
        "Everyscan is a Photo lens identify any object by taking image on your mobile camera and it shows the object details price and related images. Powered by advanced image recognition technology, this app swiftly analyzes photos of any object, delivering detailed information about its characteristics and properties.",
    },
    {
      imgPath: require("../../Assets/fahad_tutor.png"),
      isBlog: false,
      title: "FAHAD Tutoring Solutions",
      ghLink: "https://play.google.com/store/apps/details?id=com.fahadtutors",
      description:
        "This app is designed to help for all tutors to apply for the tuitions, they interested in. To get the desired results (notifications) all tutors are suggested to update their profile, specially all preferences (Class, Subjects, Areas, Groups & Boards) Easy & customized way to apply for the desired tuitions.",
    },
    {
      imgPath: require("../../Assets/my_water.png"),
      isBlog: false,
      title: "MyWater",
      ghLink: "https://play.google.com/store/apps/details?id=com.mywater.customer.app",
      description:
        "My Water® is a water technology company specializing in smart and AI based water purification systems for homes and offices. With certified components, cutting edge sensor technology and sleek designs, our purifiers will transform the way water gets to your glass.",
    },
    {
      imgPath: require("../../Assets/any_native.png"),
      isBlog: false,
      title: "Anytime Work",
      ghLink: "https://play.google.com/store/apps/details?id=com.app.any",
      description:
        "Search for part-time workers round-the-clock at your fingertips. We will help you locate the nearest available workers in real-time.",
    },
    {
      imgPath: require("../../Assets/audery_body.webp"),
      isBlog: false,
      title: "Full Audery Body Scanner Xray",
      ghLink: "https://play.google.com/store/apps/details?id=com.body_scanner.cloth_remover",
      description:
        "Full Audery Body Scanner Xray App - Body Scanner App doesn't work in real. Full Audery Body Scanner Xray - Body Scanner Camera Xray App just for fun. this is a best Full Audery Body Scanner Xray - Body Scanner Camera Xray App for scanning funny body parts.",
    },
    {
      imgPath: require("../../Assets/santa_call.webp"),
      isBlog: false,
      title: "Santa Christmas Video Call",
      ghLink: "https://play.google.com/store/apps/details?id=com.christmascall.audiovideocall.callingapp.santacall",
      description:
        "All audio and video calls are prerecorded simulations. Make an audio or video call from Santa Claus to let your friends happy. Hello Santa fanatics present day a Santa calling app for users. You are looking for Fake Call Santa app that Simulate a Video Call with Santa Claus, simulate a Voice Call that seems authentic prank calling app 2021.",
    },
    {
      imgPath: require("../../Assets/humidity_app.webp"),
      isBlog: false,
      title: "Humidity and Room Temperature",
      ghLink: "https://play.google.com/store/apps/details?id=com.humidityandtemperaturemeter.humidity.humiditymeter.temperaturemeter.humiditychecker",
      description:
        "The Humidity and room temperature meter app helps users to get indoor room temperature of a room and outdoor room temperature or surrounding environments like an indoor thermostat or thermometer works.Humidity and Room Temperature Meter Measure temperature unit type Celsius °C, Fahrenheit °F, and Kelvin °K.",
    },
    {
      imgPath: require("../../Assets/samsung_smart_view.webp"),
      isBlog: false,
      title: "Samsung Smart View - Cast To",
      ghLink: "https://play.google.com/store/apps/details?id=com.casttotv.screenmirroring.smartview.smarttvlcd",
      description:
        "Smart view and Screen share to samsung tv works with Miracast and ChromeCast enables you to screen sharing, display smartphone mobile screen and videos on Tvs and tv boxes. Enjoy playing your favourite videos, photos, games and many more on your Samsung tv, Roku tv, Lg tv and other smart tvs by using Smart View For Samsung TV.",
    },
    {
      imgPath: require("../../Assets/smart_men_photo_editor.webp"),
      isBlog: false,
      title: "Smarty Men Suit & Photo Editor",
      ghLink: "https://play.google.com/store/apps/details?id=com.tools.ovex.editor.smartymen",
      description:
        "Smarty jacket & men clothes changer app has many features which help you to change your look completely. But the most prominent feature of this smarty men suit photo editor app is the men jacket photo editor & Smart men. Get the best men suit with accessories to change dress & make your ordinary fashion photo into a Smarty Look with variety of menswear suits, clothing jackets, coat pant, Smart Hairstyles, beard, mustache & glasses.",
    },
    {
      imgPath: "https://play-lh.googleusercontent.com/QTyMPz4n0Afjl0JS_L_VtSR9gz7i7jeuehLSzMg6Jv3FIo6bazMndioIa2_fY4vozg=w832-h470-rw",
      isBlog: false,
      title: "Checkki",
      ghLink: "https://play.google.com/store/apps/details?id=com.checkki",
      description:
        "Checkki- Everything you need to check for your work can be done through Checkki. You can carry out following checks, Food & Drink Safety Checks, Stock Checks, Asset & Equipment Maintenance Checks, Properties & Building Checks, Fire Safety Checks, Staff & Contractors Checks, Quality Assurance & Quality Standards Checks. Checkki is very customisable to every industry needs. Create your own checklists and ask for specific answers including location, photos, videos and signatures.",
    },
    {
      imgPath: "https://play-lh.googleusercontent.com/8_AUbmc0tq03Y6P9lO2p3IXN6N7lv2o6Rn8lAbBsV7PeJAJmj0aVHCyR_AZZyEn3biTy=w832-h470-rw",
      isBlog: false,
      title: "YouDo",
      ghLink: "https://play.google.com/store/apps/details?id=com.senserve.youdo",
      description:
        "YouDo is a task management application, but different from the others. With YouDo you can delegate tasks to others. Tasks can be scheduled. Tasks can have flexible checklists, voice messages and images attached. For delegated tasks, you can see progress. If you need an update, one touch lets them know. YouDo is user-friendly and easy to use. You can benefit from it to just manage your own tasks.",
    },
    {
      imgPath: "https://play-lh.googleusercontent.com/yDY4qRvkWV1Sk-BEAqlVnDtnCz8GYqPILHpRvkUYrvBt94e6ddOGYWsVOErGmHw3NQ=w832-h470-rw",
      isBlog: false,
      title: "HM Residential",
      ghLink: "https://play.google.com/store/apps/details?id=com.senservev.app.hmresidential",
      description:
        "HM Residential App has all the latest properties to rent and buy in and around Newcastle upon Tyne. Existing tenants can report repairs and new tenants can fill in reference and guarantor forms.",
    },
    {
      imgPath: "https://play-lh.googleusercontent.com/zaLsFTi8DEcXMTDH86ma76a30xrL3Mydn8QJFPiPcnKTQaGmuWFjv51gLVJ1ZV0Xgw=w832-h470-rw",
      isBlog: false,
      title: "Invntry Plus",
      ghLink: "https://play.google.com/store/apps/details?id=com.invntryplus.senserve",
      description:
        "For managing inventory using barcodes and QR codes. Place generated QR code on the pallet (or use existing barcode). When collecting items, staff scan, select their name, enter quantity and sign using their finger. Be informed of stock/inventory levels and monitor sales. Track incoming orders, and outgoing items and never run out of stock again. Reorder stock from the app. Monitor consumables and stock leaks. Simple and intuitive to use."
    },
    {
      imgPath: "https://play-lh.googleusercontent.com/dMR0WprqHzm9HRUBOtW95eCDU3pvR93QRcWlntgTEWpkWvlVhd9SmSVQjsQ4gvvdmA=w832-h470-rw",
      isBlog: false,
      title: "AREA by Uptivity",
      ghLink: "https://play.google.com/store/apps/details?id=com.attendenceapp.senserve",
      description:
        "An app for clocking-in based using GPS location. Also used for seeing shift details, requesting leave and reporting absence."
    },
    {
      imgPath: "https://lh3.googleusercontent.com/OwLiPL9_5pXBDqIWmSqvkdh8nWc9f9EnoOsxk-JVBntaKo9CwFCl2naQ2SNk3bgAyA",
      isBlog: false,
      title: "MaintainPad",
      ghLink: "https://play.google.com/store/apps/details?id=com.senserve.maintainpad",
      description:
        "Used within restaurants, factories, student accommodation and letting agents, MaintainPad is an all-in-one complete management solution. Repairs, Rather than relying on phone calls to organise contractors and suppliers. The app creates efficient work request queues and updates all those involved in the repair process. It stores safety certificates for easy access and records repair histories, allowing you to identify any faulty devices. Stock, Deliveries can be signed for electronically, records keep track of where items end up, and orders can be sent automatically when supplies are running low."
    },
    {
      imgPath: "https://play-lh.googleusercontent.com/yCMcNAfulIm8ljBj4fTw4hfMKnkPEN_2BKNpQgOlWSSZvwURJpriq7ecySgo9DJR5z8=w832-h470-rw",
      isBlog: false,
      title: "Noor Couture",
      ghLink: "https://play.google.com/store/apps/details?id=com.app.noorcouture",
      description:
        "We offer ethnically inspired clothing from India and Pakistan. Browse our Semi stitched designer pieces at affordable prices for all occasions. All pieces in this range can be tailored to size 42. Our Designer Replica pieces are all hand made in house at our workshop by our highly skilled craftsmen. These pieces can be personalised to colour and size. We have years of experience and can guarantee the look you desire at very competitive prices. Bespoke Designs are available on request. Contact us to have an outfit designed especially for you. This one off exclusive design will be carefully created to suit your special occasion."
    },
    {
      imgPath: "https://play-lh.googleusercontent.com/HFi-1klQPF5vpKZCOP8ZwLHUiFpnX40Dc0kb7EpWMTXaxsrsoR8xp_bBRO-VqoRupLg=w832-h470-rw",
      isBlog: false,
      title: "Ideal Properties",
      ghLink: "https://play.google.com/store/apps/details?id=com.reportarepair.ideal",
      description:
        "Ideal Properties is designed for tenants in Newcastle, offering a seamless property management experience. Whether you need to report a repair, monitor its status, or get in touch with your local Newcastle-based letting agent, the app provides everything you need in a few taps. Key Features: Report Repairs: Submit repair requests quickly and easily, ensuring your Newcastle property gets the care it needs. Track Repair Status: Stay updated on the progress of your repair requests and know when they will be completed."
    },
    {
      imgPath: "https://play-lh.googleusercontent.com/cz2YH1PovA2_EXHT4Ac6y3pgVCBs4AOWaWTJgWHxsMTL5lVBoTQxxpW6yOj8VESUaB4=w832-h470-rw",
      isBlog: false,
      title: "Mckales Estates",
      ghLink: "https://play.google.com/store/apps/details?id=com.reportarepair.mckales",
      description:
        "Mckales Estates is designed for tenants in Newcastle, offering a seamless property management experience. Whether you need to report a repair, monitor its status, or get in touch with your local Newcastle-based letting agent, the app provides everything you need in a few taps. Key Features: Report Repairs: Submit repair requests quickly and easily, ensuring your Newcastle property gets the care it needs. Track Repair Status: Stay updated on the progress of your repair requests and know when they will be completed."
    },
    {
      imgPath: "https://play-lh.googleusercontent.com/sgqeX7KtoXiTEBgl6WtCQfCCNnG6EqA1zzD9qOjz797gIo1wQExdEFSTBGrdzZv0Mhq1=w832-h470-rw",
      isBlog: false,
      title: "JustSell Sales Rep",
      ghLink: "https://play.google.com/store/apps/details?id=com.justsell.salesrep",
      description:
        "The Sales Repp app works offline/online to make/record sales. It can be used on the road or by sales staff in-store. You can use it to track your contacts/leads, place orders and receive payments. This app is developed for the JustSell eCommerce platform. Although it can work with some other platforms (contact us for more information). JustSell is a new and innovative eCommerce platform. It s a one-stop web shop for service and product-based businesses."
    },
    {
      imgPath: "https://play-lh.googleusercontent.com/cQ7ahb4YEYnHyRzHm4tl139W-UPKsfJ29tuFZjza7UCmVCY1JujpqDVG1q45ofP8fDc=w832-h470-rw",
      isBlog: false,
      title: "EcoMita",
      ghLink: "https://play.google.com/store/apps/details?id=com.senserve.pcecms",
      description:
        "This app enables collecting meter readings (gas, electricity, LPG, water, etc.) and then submitting them to Uptivity’s application for analysis. These meter readings are used to calculate the Carbon (Co2) footprint, and the dashboard can compare with the previous month, same month, previous year, etc., so progress can be tracked. In the future, we will be combining this with an IoT device that ‘reads’ meters using a camera. That then enables collecting much more frequent readings, enabling more forensic analysis. On the desktop side, financial data (costs, budgets) can be entered for combined comparison and analysis with the aim of making both Co2 and financial progress."
    },
    {
      imgPath: "https://play-lh.googleusercontent.com/78sSRn_UVBU9wnX6ZlwbDaRytnWxcrshazDwBViExm2_Wo80viAaQCEgDY-T8vmSCnsI=w832-h470-rw",
      isBlog: false,
      title: "Ahmed's Food",
      ghLink: "https://play.google.com/store/apps/details?id=com.app.justsell.ahmedfoods",
      description:
        "This app enables collecting meter readings (gas, electricity, LPG, water, etc.) and then submitting them to Uptivity’s application for analysis. These meter readings are used to calculate the Carbon (Co2) footprint, and the dashboard can compare with the previous month, same month, previous year, etc., so progress can be tracked. In the future, we will be combining this with an IoT device that ‘reads’ meters using a camera. That then enables collecting much more frequent readings, enabling more forensic analysis. On the desktop side, financial data (costs, budgets) can be entered for combined comparison and analysis with the aim of making both Co2 and financial progress."
    },

  ];
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/pos.webp")}
              isBlog={false}
              title="Point of Sale"
              ghLink="https://play.google.com/store/apps/details?id=com.dwcit.shopzy"
              description="Facilitate all retail and Food & Beverages with complete management solution.Shopzy POS is complete solution where you can manage Inventory, employee’s productivity, enhance better utilization of resources, reports and much more."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/samsung_smart.webp")}
              isBlog={false}
              title="Samsung Smart View"
              description="Smart view and Screen share to samsung tv works with Miracast and ChromeCast enables you to screen sharing, display smartphone mobile screen and videos on Tvs and tv boxes.Smart View Screen Sharing App also works with chromecast, share screen on roku tv and Samsung Smart View that instantly share screen from your mobile phone to Smart Tvs and android tvs."
              ghLink="https://play.google.com/store/apps/details?id=com.casttotv.screenmirroring.smartview.smarttvlcd"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/every_scan.jpeg")}
              isBlog={false}
              title="EveryScan: Identify Everything"
              description="Everyscan is a Photo lens identify any object by taking image on your mobile camera and it shows the object details price and related images. Powered by advanced image recognition technology, this app swiftly analyzes photos of any object, delivering detailed information about its characteristics and properties."
              ghLink="https://play.google.com/store/apps/details?id=com.image.search.aitool.imagefinder&hl=en&gl=US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/fahad_tutor.png")}
              isBlog={false}
              title="FAHAD Tutoring Solutions"
              description="This app is designed to help for all tutors to apply for the tuitions, they interested in. To get the desired results (notifications) all tutors are suggested to update their profile, specially all preferences (Class, Subjects, Areas, Groups & Boards) Easy & customized way to apply for the desired tuitions."
              ghLink="https://play.google.com/store/apps/details?id=com.fahadtutors"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/my_water.png")}
              isBlog={false}
              title="MyWater"
              description="My Water® is a water technology company specializing in smart and AI based water purification systems for homes and offices. With certified components, cutting edge sensor technology and sleek designs, our purifiers will transform the way water gets to your glass."
              ghLink="https://play.google.com/store/apps/details?id=com.mywater.customer.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/any_native.png")}
              isBlog={false}
              title="Anytime Work"
              description="Search for part-time workers round-the-clock at your fingertips. We will help you locate the nearest available workers in real-time."
              ghLink="https://play.google.com/store/apps/details?id=com.app.any"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/audery_body.webp")}
              isBlog={false}
              title="Full Audery Body Scanner Xray"
              ghLink="https://play.google.com/store/apps/details?id=com.body_scanner.cloth_remover"
              description="Full Audery Body Scanner Xray App - Body Scanner App doesn't work in real. Full Audery Body Scanner Xray - Body Scanner Camera Xray App just for fun. this is a best Full Audery Body Scanner Xray - Body Scanner Camera Xray App for scanning funny body parts."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/santa_call.webp")}
              isBlog={false}
              title="Santa Christmas Video Call"
              ghLink="https://play.google.com/store/apps/details?id=com.christmascall.audiovideocall.callingapp.santacall"
              description="All audio and video calls are prerecorded simulations. Make an audio or video call from Santa Claus to let your friends happy. Hello Santa fanatics present day a Santa calling app for users. You are looking for Fake Call Santa app that Simulate a Video Call with Santa Claus, simulate a Voice Call that seems authentic prank calling app 2021."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/humidity_app.webp")}
              isBlog={false}
              title="Humidity and Room Temperature"
              ghLink="https://play.google.com/store/apps/details?id=com.humidityandtemperaturemeter.humidity.humiditymeter.temperaturemeter.humiditychecker"
              description="The Humidity and room temperature meter app helps users to get indoor room temperature of a room and outdoor room temperature or surrounding environments like an indoor thermostat or thermometer works.Humidity and Room Temperature Meter Measure temperature unit type Celsius °C, Fahrenheit °F, and Kelvin °K."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/samsung_smart_view.webp")}
              isBlog={false}
              title="Samsung Smart View - Cast To"
              ghLink="https://play.google.com/store/apps/details?id=com.casttotv.screenmirroring.smartview.smarttvlcd"
              description="Smart view and Screen share to samsung tv works with Miracast and ChromeCast enables you to screen sharing, display smartphone mobile screen and videos on Tvs and tv boxes. Enjoy playing your favourite videos, photos, games and many more on your Samsung tv, Roku tv, Lg tv and other smart tvs by using Smart View For Samsung TV."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/smart_men_photo_editor.webp")}
              isBlog={false}
              title="Smarty Men Suit & Photo Editor"
              ghLink="https://play.google.com/store/apps/details?id=com.tools.ovex.editor.smartymen"
              description="Smarty jacket & men clothes changer app has many features which help you to change your look completely. But the most prominent feature of this smarty men suit photo editor app is the men jacket photo editor & Smart men. Get the best men suit with accessories to change dress & make your ordinary fashion photo into a Smarty Look with variety of menswear suits, clothing jackets, coat pant, Smart Hairstyles, beard, mustache & glasses."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/QTyMPz4n0Afjl0JS_L_VtSR9gz7i7jeuehLSzMg6Jv3FIo6bazMndioIa2_fY4vozg=w832-h470-rw"}
              isBlog={false}
              title="Checkki"
              ghLink="https://play.google.com/store/apps/details?id=com.checkki"
              description="Checkki- Everything you need to check for your work can be done through Checkki. You can carry out following checks, Food & Drink Safety Checks, Stock Checks, Asset & Equipment Maintenance Checks, Properties & Building Checks, Fire Safety Checks, Staff & Contractors Checks, Quality Assurance & Quality Standards Checks. Checkki is very customisable to every industry needs. Create your own checklists and ask for specific answers including location, photos, videos and signatures."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/8_AUbmc0tq03Y6P9lO2p3IXN6N7lv2o6Rn8lAbBsV7PeJAJmj0aVHCyR_AZZyEn3biTy=w832-h470-rw"}
              isBlog={false}
              title="YouDo"
              ghLink="https://play.google.com/store/apps/details?id=com.senserve.youdo"
              description="YouDo is a task management application, but different from the others. With YouDo you can delegate tasks to others. Tasks can be scheduled. Tasks can have flexible checklists, voice messages and images attached. For delegated tasks, you can see progress. If you need an update, one touch lets them know. YouDo is user-friendly and easy to use. You can benefit from it to just manage your own tasks."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/yDY4qRvkWV1Sk-BEAqlVnDtnCz8GYqPILHpRvkUYrvBt94e6ddOGYWsVOErGmHw3NQ=w832-h470-rw"}
              isBlog={false}
              title="HM Residential"
              ghLink="https://play.google.com/store/apps/details?id=com.senservev.app.hmresidential"
              description="HM Residential App has all the latest properties to rent and buy in and around Newcastle upon Tyne. Existing tenants can report repairs and new tenants can fill in reference and guarantor forms."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/zaLsFTi8DEcXMTDH86ma76a30xrL3Mydn8QJFPiPcnKTQaGmuWFjv51gLVJ1ZV0Xgw=w832-h470-rw"}
              isBlog={false}
              title="Invntry Plus"
              ghLink="https://play.google.com/store/apps/details?id=com.invntryplus.senserve"
              description="For managing inventory using barcodes and QR codes. Place generated QR code on the pallet (or use existing barcode). When collecting items, staff scan, select their name, enter quantity and sign using their finger. Be informed of stock/inventory levels and monitor sales. Track incoming orders, and outgoing items and never run out of stock again. Reorder stock from the app. Monitor consumables and stock leaks. Simple and intuitive to use."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/dMR0WprqHzm9HRUBOtW95eCDU3pvR93QRcWlntgTEWpkWvlVhd9SmSVQjsQ4gvvdmA=w832-h470-rw"}
              isBlog={false}
              title="AREA by Uptivity"
              ghLink="https://play.google.com/store/apps/details?id=com.attendenceapp.senserve"
              description="An app for clocking-in based using GPS location. Also used for seeing shift details, requesting leave and reporting absence."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://lh3.googleusercontent.com/OwLiPL9_5pXBDqIWmSqvkdh8nWc9f9EnoOsxk-JVBntaKo9CwFCl2naQ2SNk3bgAyA"}
              isBlog={false}
              title="MaintainPad"
              ghLink="https://play.google.com/store/apps/details?id=com.senserve.maintainpad"
              description="Used within restaurants, factories, student accommodation and letting agents, MaintainPad is an all-in-one complete management solution. Repairs, Rather than relying on phone calls to organise contractors and suppliers. The app creates efficient work request queues and updates all those involved in the repair process. It stores safety certificates for easy access and records repair histories, allowing you to identify any faulty devices. Stock, Deliveries can be signed for electronically, records keep track of where items end up, and orders can be sent automatically when supplies are running low."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/yCMcNAfulIm8ljBj4fTw4hfMKnkPEN_2BKNpQgOlWSSZvwURJpriq7ecySgo9DJR5z8=w832-h470-rw"}
              isBlog={false}
              title="Noor Couture"
              ghLink="https://play.google.com/store/apps/details?id=com.app.noorcouture"
              description="We offer ethnically inspired clothing from India and Pakistan. Browse our Semi stitched designer pieces at affordable prices for all occasions. All pieces in this range can be tailored to size 42. Our Designer Replica pieces are all hand made in house at our workshop by our highly skilled craftsmen. These pieces can be personalised to colour and size. We have years of experience and can guarantee the look you desire at very competitive prices. Bespoke Designs are available on request. Contact us to have an outfit designed especially for you. This one off exclusive design will be carefully created to suit your special occasion."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/HFi-1klQPF5vpKZCOP8ZwLHUiFpnX40Dc0kb7EpWMTXaxsrsoR8xp_bBRO-VqoRupLg=w832-h470-rw"}
              isBlog={false}
              title="Ideal Properties"
              ghLink="https://play.google.com/store/apps/details?id=com.reportarepair.ideal"
              description="Ideal Properties is designed for tenants in Newcastle, offering a seamless property management experience. Whether you need to report a repair, monitor its status, or get in touch with your local Newcastle-based letting agent, the app provides everything you need in a few taps. Key Features: Report Repairs: Submit repair requests quickly and easily, ensuring your Newcastle property gets the care it needs. Track Repair Status: Stay updated on the progress of your repair requests and know when they will be completed."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/cz2YH1PovA2_EXHT4Ac6y3pgVCBs4AOWaWTJgWHxsMTL5lVBoTQxxpW6yOj8VESUaB4=w832-h470-rw"}
              isBlog={false}
              title="Mckales Estates"
              ghLink="https://play.google.com/store/apps/details?id=com.reportarepair.mckales"
              description="Mckales Estates is designed for tenants in Newcastle, offering a seamless property management experience. Whether you need to report a repair, monitor its status, or get in touch with your local Newcastle-based letting agent, the app provides everything you need in a few taps. Key Features: Report Repairs: Submit repair requests quickly and easily, ensuring your Newcastle property gets the care it needs. Track Repair Status: Stay updated on the progress of your repair requests and know when they will be completed."
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/sgqeX7KtoXiTEBgl6WtCQfCCNnG6EqA1zzD9qOjz797gIo1wQExdEFSTBGrdzZv0Mhq1=w832-h470-rw"}
              isBlog={false}
              title="JustSell Sales Rep"
              ghLink="https://play.google.com/store/apps/details?id=com.justsell.salesrep"
              description="The Sales Repp app works offline/online to make/record sales. It can be used on the road or by sales staff in-store. You can use it to track your contacts/leads, place orders and receive payments. This app is developed for the JustSell eCommerce platform. Although it can work with some other platforms (contact us for more information). JustSell is a new and innovative eCommerce platform. It s a one-stop web shop for service and product-based businesses."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/cQ7ahb4YEYnHyRzHm4tl139W-UPKsfJ29tuFZjza7UCmVCY1JujpqDVG1q45ofP8fDc=w832-h470-rw"}
              isBlog={false}
              title="EcoMita"
              ghLink="https://play.google.com/store/apps/details?id=com.senserve.pcecms"
              description="This app enables collecting meter readings (gas, electricity, LPG, water, etc.) and then submitting them to Uptivity’s application for analysis. These meter readings are used to calculate the Carbon (Co2) footprint, and the dashboard can compare with the previous month, same month, previous year, etc., so progress can be tracked. In the future, we will be combining this with an IoT device that ‘reads’ meters using a camera. That then enables collecting much more frequent readings, enabling more forensic analysis. On the desktop side, financial data (costs, budgets) can be entered for combined comparison and analysis with the aim of making both Co2 and financial progress."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/78sSRn_UVBU9wnX6ZlwbDaRytnWxcrshazDwBViExm2_Wo80viAaQCEgDY-T8vmSCnsI=w832-h470-rw"}
              isBlog={false}
              title="Ahmed's Food"
              ghLink="https://play.google.com/store/apps/details?id=com.app.justsell.ahmedfoods"
              description="Ahmed International Food Store is a newly refurbished and built super market in South Shields. We specialise in all Indian, Pakistani, Bangladeshi foods and spices. We also have fresh bakery and deli within our store. Fresh Halal Meat counter is available for our retail and wholesale customers."
            />
          </Col>
        </Row> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                ghLink={project.ghLink}
                description={project.description}
              />
            </Col>
          ))}
        </Row>;
      </Container>
    </Container>
  );
}

export default Projects;
