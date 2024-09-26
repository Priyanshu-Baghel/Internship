import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Image from '../media/new.jpeg';
import { NavLink } from "react-router-dom";
import { Zap, Moon, Filter,DollarSign } from 'lucide-react'

const Home = ({ isUser }) => {
    return (
  <div className="relative w-full bg-white">
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      <div className="flex flex-col justify-center px-4 py-8 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-12   xl:col-span-6">
        <div className="flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
          <div className="rounded-full bg-white p-1 px-2">
            <p className="text-sm font-medium">Explore</p>
          </div>
          <p className="text-sm font-medium">Join our Community &rarr;</p>
        </div>
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
          People who care about your growth
        </h1>
        <p className="mt-8 text-lg text-gray-700">
          Revolutionising Education: An Innovative Platform for Student Project Integration and Collaboration
        </p>
        <Container>
              <Box sx={{ display: 'flex', marginTop: '10px', gap: 2}}>
                  {!isUser ? (<>
                    <Button size="large" color='neutral' variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: 'white', color: 'black' }}LinkComponent={NavLink} to='/signup'>
                          Sign up
                      </Button>
                      <Button size="large" color='neutral' variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: 'black', color: 'white' }} LinkComponent={NavLink} to='/login'>
                          Login
                      </Button>
                      
                  </>) : (<Button size="large" color='neutral' variant="contained" LinkComponent={NavLink} to='/admin'>
                      Dashboard
                  </Button>)}
              </Box>
      </Container> 
      </div>
      <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <img
          className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] rounded-es-full max-lg:rounded-none "
          src={Image}
          alt=""
        />
      </div>
    </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-black">
            Key Features of Portal
          </p>
        </div>
        <h2 className="mt-6 text-xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        Unveiling Key Features of Our Platform
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Discover the core strengths of our platform with 'Innovative Academic
          Solutions,' a spotlight on originality verification, excellence
          feedback, domain categorization, and the collaborative Academic Hub.
          Experience a dynamic and efficient approach to academic exploration
          and sharing
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <DollarSign className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Originality Verification
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Our platform employs advanced plagiarism detection, ensuring
            originality verification for every project, guaranteeing the
            authenticity of student efforts.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Zap className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Excellence Feedback
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Fostering academic excellence through a feedback-driven system, our
            platform prioritizes collaborative improvement, enhancing project
            quality and overall educational outcomes.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Moon className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Domain Categorization
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Efficiently explore academic domains with our platform's meticulous
            categorization, providing a streamlined and professional approach to
            research and project discovery.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Filter className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Academic Hub
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Welcome to our Academic Hub, a dedicated space for sharing and
            disseminating academic excellence, creating a dynamic environment
            for the exchange of informative projects and insights.
          </p>
        </div>
      </div>
      <div className="mt-28 px-10">
        <h1 className="mb-4 text-3xl xl:text-5xl font-bold text-black">
          What Our Lead Says?
        </h1>
        <section className="px-2 py-10 md:px-0 ">
          <div className="mx-auto max-w-4xl">
            <div className="md:flex md:items-center md:justify-center md:space-x-14 mt-10">
              <div className="relative h-48 w-48 flex-shrink-0">
                <img
                  className="relative h-48 w-48 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
              </div>

              <div className="mt-10 md:mt-0">
                <blockquote>
                  <p className="text-xl text-black">
                  As the lead, I see our platform innovating with a focus on originality, excellence, seamless categorization, and vibrant collaboration. We're committed to revolutionizing academia, fostering creativity, and shaping the future of academic engagement
                  </p>
                </blockquote>
                <p className="mt-7 text-lg font-semibold text-black">
                  Priyanshu Baghel
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Machine and Deep Learning Engineer
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
    )
}

export default Home