import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AngleDoubleDown, AngleDoubleDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleDoubleDown",
  component: AngleDoubleDown,
} as ComponentMeta<typeof AngleDoubleDown>;

const Template: ComponentStory<typeof AngleDoubleDown> = (
  args: AngleDoubleDownPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AngleDoubleDown {...args} />
    <AngleDoubleDown {...args} fill="red.500" />
    <AngleDoubleDown {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
