import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Parcel, ParcelPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Parcel",
  component: Parcel,
} as ComponentMeta<typeof Parcel>;

const Template: ComponentStory<typeof Parcel> = (args: ParcelPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Parcel {...args} />
    <Parcel {...args} fill="red.500" />
    <Parcel {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
