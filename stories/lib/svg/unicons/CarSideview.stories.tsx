import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CarSideview, CarSideviewPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CarSideview",
  component: CarSideview,
} as ComponentMeta<typeof CarSideview>;

const Template: ComponentStory<typeof CarSideview> = (
  args: CarSideviewPropsI
) => (
  <x.div display="flex" gap="20px">
    <CarSideview {...args} />
    <CarSideview {...args} fill="red.500" />
    <CarSideview {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
