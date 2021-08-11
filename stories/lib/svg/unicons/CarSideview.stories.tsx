import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CarSideview, CarSideviewPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CarSideview",
  component: CarSideview,
} as ComponentMeta<typeof CarSideview>;

const Template: ComponentStory<typeof CarSideview> = (
  args: CarSideviewPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CarSideview {...args} />
    <CarSideview {...args} fill="red.500" />
    <CarSideview {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
