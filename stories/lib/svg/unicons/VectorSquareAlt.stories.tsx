import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { VectorSquareAlt, VectorSquareAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VectorSquareAlt",
  component: VectorSquareAlt,
} as ComponentMeta<typeof VectorSquareAlt>;

const Template: ComponentStory<typeof VectorSquareAlt> = (
  args: VectorSquareAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <VectorSquareAlt {...args} />
    <VectorSquareAlt {...args} fill="red.500" />
    <VectorSquareAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
