export enum SelectedPage {
  Home = "home",
  AboutUs = "aboutUs",
  Testimonials = "testimonials",
  ContactUs = "contactus",
  Services = "services",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface TestimonialsType {
  image: string;
  testimony: string;
  client: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
