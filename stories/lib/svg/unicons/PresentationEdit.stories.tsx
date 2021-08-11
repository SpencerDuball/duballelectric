import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PresentationEdit, PresentationEditPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PresentationEdit",
  component: PresentationEdit,
} as ComponentMeta<typeof PresentationEdit>;

const Template: ComponentStory<typeof PresentationEdit> = (
  args: PresentationEditPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <PresentationEdit {...args} />
    <PresentationEdit {...args} fill="red.500" />
    <PresentationEdit {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
