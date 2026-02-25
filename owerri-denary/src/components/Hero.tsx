import { Box, Typography, Button, Stack, Divider } from "@mui/material";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GavelIcon from "@mui/icons-material/Gavel";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import dark from "../assets/dark.jpeg";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import group from "../assets/group.jpeg";
import history from "../assets/history.jpeg"; 
import ChurchIcon from "@mui/icons-material/Church";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function Home() {
  const navigate = useNavigate();

  /* ================= STYLES ================= */

  const sectionImageStyle = {
    width: "100%",
    height: { xs: 220, md: 400 },
    objectFit: "cover" as const,
    borderRadius: 3,
    boxShadow: 3,
    transition: "all 0.4s ease",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: 6,
    },
  };

  const pageBackgroundStyle = {
    backgroundImage: `url(${dark})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: { xs: "fixed", md: "fixed" } as const,
  };

  const contentWrapper = {
    maxWidth: "1400px",
    mx: "auto",
    px: { xs: 2, md: 8 },
  };

  /* ================= ANIMATIONS ================= */

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageFromLeftVariant: Variants = {
    hidden: { opacity: 0, x: -120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const investmentContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const investmentItem: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInVariant: Variants = {
    hidden: (direction: "left" | "right") => ({
      opacity: 0,
      x: direction === "left" ? -60 : 60,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  /* ================= RETURN ================= */

  return (
    <Box
      sx={{
        ...pageBackgroundStyle,
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* HERO SECTION */}
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
 <Typography
            component="h1"
            fontWeight="small-caps"
            textAlign="center"
            gutterBottom
            sx={{
              color: "#D4AF37",
              textShadow: "0 0 16px rgba(212,175,55,0.45)",
              letterSpacing: "1px",
              fontSize: {
                xs: "2.1rem",
                sm: "2.6rem",
                md: "3rem",
              },
            }}
          >
            Catholic Archdiocese Of Owerri
          </Typography>


          <Typography
            component="h1"
            fontWeight="medium-caps"
            textAlign="center"
            gutterBottom
            sx={{
              color: "#D4AF37",
              textShadow: "0 0 16px rgba(212,175,55,0.45)",
              letterSpacing: "1px",
              fontSize: {
                xs: "2.1rem",
                sm: "2.6rem",
                md: "3rem",
              },
            }}
          >
Catholic Youth Organization of Nigeria (CYON)           </Typography>

          {/* TITLE */}
          <Typography
            component="h1"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{
              color: "#D4AF37",
              textShadow: "0 0 16px rgba(212,175,55,0.45)",
              letterSpacing: "1px",
              fontSize: {
                xs: "2.1rem",
                sm: "2.6rem",
                md: "3rem",
              },
            }}
          >
            Owerri Denary Cyon
          </Typography>

          {/* <Typography
            component="h2"
            textAlign="center"
            sx={{
              color: "#F5F0EC",
              letterSpacing: "0.5px",
              fontSize: {
                xs: "1.05rem",
                sm: "1.2rem",
                md: "1.35rem",
              },
              mb: 2,
            }}
          >
            Ably Lead by Engr Nlemolisa Charlse
          </Typography> */}

          <Box
            sx={{
              width: 80,
              height: 3,
              bgcolor: "#D4AF37",
              mx: "auto",
              mb: 3,
              borderRadius: 2,
              boxShadow: "0 0 12px rgba(212,175,55,0.5)",
            }}
          />

          {/* HERO IMAGE */}
          <Box
            component={motion.img}
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            src={group}
            alt="Oba Shopping Complex"
            sx={{
              width: "100%",
              height: { xs: 220, md: 400 },
              objectFit: "cover",
              borderRadius: 3,
              boxShadow: 6,
              mt: 5,
            }}
          />

          {/* CTA BUTTONS */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 5 }}
          >
            <motion.div
              whileHover={{ scale: 1.08, backgroundColor: "#da7127", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-block' }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  borderColor: "#D4AF37",
                  color: "#D4AF37",
                }}
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </motion.div>
          </Stack>
        </motion.div>
      </Box>

      <Divider
        sx={{
          my: { xs: 4, md: 5 },
          borderColor: "rgba(139, 69, 19, 0.15)",
          maxWidth: "85%",
          mx: "auto",
        }}
      />

<Box px={{ xs: 2, md: 8 }} py={{ xs: 6, md: 8 }}>
  <Typography
    variant="h4"
    textAlign="center"
    fontWeight="bold"
    sx={{
      color: "#D4AF37",
      textShadow: "0 0 14px rgba(212,175,55,0.35)",
      mb: 1,
      letterSpacing: 1,
    }}
  >
    CYON Owerri Denary Activities
  </Typography>

  <Typography
    textAlign="center"
    sx={{ color: "#F5F0EC" }}
    maxWidth="750px"
    mx="auto"
    mb={6}
  >
    The Catholic Youth Organization of Nigeria (CYON) Owerri Denary is
    committed to spiritual growth, unity, leadership development, and
    active parish participation across all parishes within the denary.
  </Typography>

  <Grid
    container
    spacing={4}
    justifyContent="center"
    component={motion.div}
    variants={investmentContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
  >
    {[
      {
        icon: <AssignmentTurnedInIcon />,
        title: "Monthly Denary Meetings",
        desc:
          "Our denary meetings are held every second Sunday of the month, bringing together youth from all parishes for unity and collaboration.",
      },
      {
        icon: <GavelIcon />,
        title: "Holy Mass Celebration",
        desc:
          "Each meeting begins with the Holy Mass, grounding all activities in prayer, worship, and spiritual reflection.",
      },
      {
        icon: <TrendingUpIcon />,
        title: "Rotational Hosting",
        desc:
          "Meetings rotate across parishes within Owerri Denary, encouraging fellowship and ensuring members visit and connect with every parish.",
      },
      {
        icon: <VerifiedIcon />,
        title: "Denary Youth Day",
        desc:
          "We celebrate our Denary Youth Day annually — a vibrant gathering focused on faith, empowerment, and youth engagement.",
      },
      {
        icon: <MonetizationOnIcon />,
        title: "Annual Denary Retreat",
        desc:
          "A spiritually enriching retreat held yearly to strengthen faith, leadership, and personal development among members.",
      },
      {
        icon: <PaymentsIcon />,
        title: "Dean’s Approval & Guidance",
        desc:
          "All major events and annual programs are officially scheduled and approved by the Dean of the Denary.",
      },
    ].map((item, index) => (
      <Grid
        size={{ xs: 12, md: 6, sm: 6 }}
        key={index}
        component={motion.div}
        variants={investmentItem}
        whileHover={{ y: -8, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 200 }}
        display="flex"
        justifyContent="center"
      >
        <Box
          sx={{
            p: 4,
            maxWidth: 340,
            width: "100%",
            borderRadius: 3,
            backgroundColor: "green.200",
            boxShadow: 4,
            textAlign: "center",
            transition: "all 0.3s ease",
          }}
        >
          <Box
            sx={{
              color: "#D4AF37",
              fontSize: 42,
              mb: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {item.icon}
          </Box>

          <Typography
            fontWeight="bold"
            mb={1}
            sx={{ color: "#D4AF37", fontSize: 16 }}
          >
            {item.title}
          </Typography>

          <Typography sx={{ color: "#F5F0EC", fontSize: 14 }}>
            {item.desc}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>

      <Divider
        sx={{
          my: { xs: 4, md: 5 },
          borderColor: "rgba(139, 69, 19, 0.15)",
          maxWidth: "85%",
          mx: "auto",
        }}
      />

      {/* SECTION 1 – OVERVIEW */}
      <Box sx={contentWrapper} py={{ xs: 4, md: 5 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* TEXT CONTENT */}
          <Grid
            
        size={{ xs: 12, }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            <motion.div
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: "#D4AF37",
                  textShadow: "0 0 12px rgba(212, 175, 55, 0.35)",
                  textAlign: "center",
                }}
              >
                History of CYON Owerri Denary
              </Typography>

              <Typography sx={{ color: "#F5F0EC", fontSize: 15, mb: 2 }}>
                The Catholic Youth Organization of Nigeria (CYON) Owerri Denary
                was established to unite and empower youth across all parishes
                in the Owerri Denary. From its early beginnings, the
                organization has remained rooted in faith, service, leadership
                development, and active participation in parish life.
              </Typography>

              <Typography sx={{ color: "#F5F0EC", fontSize: 15, mb: 2 }}>
                The first President of CYON Owerri Denary was{" "}
                <strong>Engr. Nlemolisa Charles</strong>, whose leadership laid
                the foundation for structured youth engagement and collaboration
                among parishes. Under his tenure, the organization grew in
                membership and scope, focusing on spiritual growth and
                fellowship.
              </Typography>

              <Typography sx={{ color: "#F5F0EC", fontSize: 15, mb: 2 }}>
                The first Dean of CYON Owerri Denary was{" "}
                <strong>Very Rev. Fr. Charlse Ikwuegbu</strong>, whose pastoral
                guidance helped to shape the spiritual direction of the youth.
                His support encouraged deepening of faith, stronger parish
                identity, and a commitment to Christian values among the youth.
              </Typography>

              <Typography sx={{ color: "#F5F0EC", fontSize: 15, mb: 2 }}>
                The first Chaplain of CYON Owerri Denary was{" "}
                <strong>Fr. Bede Nwalozie</strong>, who provided spiritual care,
                counsel, and sacramental support to members. His close
                involvement fostered unity, prayerful reflection, and service to
                community and parish needs.
              </Typography>

              <Typography sx={{ color: "#F5F0EC", fontSize: 15, mb: 2 }}>
                Over the years, CYON Owerri Denary has continued to grow in both
                spiritual maturity and community involvement, organizing
                programs that strengthen leadership, deepen faith, and promote
                service among the youth. Through monthly meetings, prayer
                gatherings, mentorship, and outreach, the organization remains
                committed to forming young Catholics who are spiritually
                grounded and socially responsible.
              </Typography>

              <Typography sx={{ color: "#F5F0EC", fontSize: 15 }}>
                Today, CYON Owerri Denary stands as a vibrant and dynamic youth
                body, united in faith, enriched by fellowship, and inspired to
                serve both Church and society.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Divider
        sx={{
          my: { xs: 4, md: 5 },
          borderColor: "rgba(139, 69, 19, 0.15)",
          maxWidth: "85%",
          mx: "auto",
        }}
      />

   <Box sx={contentWrapper} py={{ xs: 4, md: 5 }}>
  <Grid container spacing={4} justifyContent="center" alignItems="center">
    
    {/* IMAGE SIDE */}
    <Grid
      size={{ xs: 12, md: 6 }}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        variants={imageFromLeftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        style={{ width: "100%" }}
      >
        <Box
          component="img"
          src={history} // use your CYON group image
          alt="Owerri Denary CYON"
          sx={sectionImageStyle}
        />
      </motion.div>
    </Grid>

    {/* TEXT SIDE */}
    <Grid
      size={{ xs: 12, md: 6 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: "#D4AF37",
            textShadow: "0 0 12px rgba(212, 175, 55, 0.35)",
            textAlign: "center",
          }}
        >
          Leadership, Unity & Spiritual Growth
        </Typography>

        <Typography sx={{ color: "#F5F0EC" }}>
          CYON Owerri Denary stands as a unifying body for Catholic youths
          across all parishes within the denary. Through structured leadership
          and coordinated programs, the organization fosters collaboration,
          accountability, and shared responsibility among parish youth bodies.
          <br />
          <br />
          Under the leadership of Engr. Nlemolisa Charles, the denary continues
          to strengthen unity, discipline, and active participation in Church
          activities.
          <br />
          <br />
          Our mission remains clear — to build spiritually grounded, morally
          upright, and socially responsible young Catholics who serve both the
          Church and society with dedication and faith.
        </Typography>
      </motion.div>
    </Grid>
  </Grid>
</Box>

      <Divider
        sx={{
          my: { xs: 4, md: 5 },
          borderColor: "rgba(139, 69, 19, 0.15)",
          maxWidth: "85%",
          mx: "auto",
        }}
      />

      {/* SECTION 3 – AMENITIES */}
     <Box px={{ xs: 2, md: 8 }} py={{ xs: 4, md: 5 }} justifyContent="center">
  <Typography
    variant="h5"
    fontWeight="bold"
    gutterBottom
    textAlign="center"
    sx={{
      color: "#D4AF37",
      textShadow: "0 0 12px rgba(212, 175, 55, 0.35)",
    }}
  >
    Why CYON Owerri Denary Stands Out
  </Typography>

  <Typography
    textAlign="center"
    sx={{ color: "#F5F0EC" }}
    maxWidth="700px"
    mx="auto"
    mb={4}
  >
    CYON Owerri Denary is committed to raising spiritually grounded,
    disciplined, and purpose-driven Catholic youths across all parishes
    within the denary.
  </Typography>

  <Grid container spacing={4} alignItems="center">
    {/* FEATURES */}
    <Grid size={{ xs: 12, md: 6 }}>
      <Grid container spacing={3}>
        {[
          {
            icon: <ChurchIcon />,
            title: "Spiritual Formation",
            desc: "Monthly Mass, prayer gatherings, and retreats that deepen faith and strengthen Catholic identity.",
          },
          {
            icon: <GroupsIcon />,
            title: "Unity Across Parishes",
            desc: "Bringing together youths from all parishes to foster collaboration, friendship, and shared growth.",
          },
          {
            icon: <SchoolIcon />,
            title: "Leadership Development",
            desc: "Training young members to become responsible leaders in Church and society.",
          },
          {
            icon: <VolunteerActivismIcon />,
            title: "Service & Outreach",
            desc: "Active participation in parish programs and community outreach initiatives.",
          },
          {
            icon: <SportsSoccerIcon />,
            title: "Sports & Social Activities",
            desc: "Promoting bonding and healthy living through organized sporting and social events.",
          },
          {
            icon: <EmojiEventsIcon />,
            title: "Annual Youth Programs",
            desc: "Denary Youth Day, retreats, and special events approved and guided by the Dean.",
          },
        ].map((item, index) => (
          <Grid size={{ xs: 12, md: 6, sm: 6 }} key={index}>
            <motion.div
              custom={index % 2 === 0 ? "left" : "right"}
              variants={slideInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "green.200",
                  boxShadow: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    color: "#D4AF37",
                    fontSize: 36,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography fontWeight="bold" sx={{ color: "#D4AF37" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#F5F0EC" }} fontSize={14}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Grid>

    {/* IMAGE */}
    <Grid size={{ xs: 12, md: 6 }}>
      <Box
        component="img"
        src={group} // your CYON image
        alt="CYON Owerri Denary Youth"
        sx={{
          width: "100%",
          borderRadius: 3,
          objectFit: "cover",
          boxShadow: 2,
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 6,
          },
        }}
      />
    </Grid>
  </Grid>
</Box>

      <Divider
        sx={{
          my: { xs: 4, md: 5 },
          borderColor: "rgba(139, 69, 19, 0.15)",
          maxWidth: "85%",
          mx: "auto",
        }}
      />

      {/* SECTION 4 – CONCLUSION */}
      <Box textAlign="center" px={{ xs: 2, md: 8 }} py={{ xs: 4, md: 5 }}>
  <Typography
    variant="h5"
    fontWeight="bold"
    gutterBottom
    sx={{
      color: "#D4AF37",
      textShadow: "0 0 12px rgba(212, 175, 55, 0.35)",
    }}
  >
    The Future of CYON Owerri Denary
  </Typography>

  <Typography sx={{ color: "#F5F0EC" }} maxWidth="900px" mx="auto">
    CYON Owerri Denary continues to grow as a dynamic and spiritually
    impactful youth body within the Church. Beyond monthly meetings and
    annual celebrations, the denary is committed to strengthening leadership
    structure, deepening faith formation, and increasing youth participation
    across all parishes.
    <br />
    <br />
    With renewed dedication to unity, discipline, and evangelization,
    Owerri Denary CYON is focused on building a generation of young Catholics
    who are spiritually grounded, morally upright, and socially responsible.
    <br />
    <br />
    Through collaboration with parish executives, guidance from the Dean,
    and the support of our Chaplain, the future remains bright as we work
    together to advance the mission of the Church — forming leaders for
    tomorrow and strengthening the youth of today.
  </Typography>
</Box>

    
    </Box>
  );
}