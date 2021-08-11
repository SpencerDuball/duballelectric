import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  DuballElectricSquare,
  DuballElectricSquarePropsI,
} from "lib/svg/duball";

export default {
  title: "lib/svg/duball/DuballElectricSquare",
  component: DuballElectricSquare,
} as ComponentMeta<typeof DuballElectricSquare>;

const Template: ComponentStory<typeof DuballElectricSquare> = (
  args: DuballElectricSquarePropsI
) => (
  <Box display="flex" gap="20px">
    <DuballElectricSquare {...args} />
    <DuballElectricSquare
      {...args}
      colorPalette={["blue.500", "red.500", "green.500"]}
    />
    <DuballElectricSquare {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { h: "50px", w: "50px" };
