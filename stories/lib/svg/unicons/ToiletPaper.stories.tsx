import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ToiletPaper, ToiletPaperPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ToiletPaper",
  component: ToiletPaper,
} as ComponentMeta<typeof ToiletPaper>;

const Template: ComponentStory<typeof ToiletPaper> = (
  args: ToiletPaperPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ToiletPaper {...args} />
    <ToiletPaper {...args} fill="red.500" />
    <ToiletPaper {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
