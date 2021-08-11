import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DuballElectric, DuballElectricPropsI } from "lib/svg/duball";

export default {
  title: "lib/svg/duball/DuballElectric",
  component: DuballElectric,
} as ComponentMeta<typeof DuballElectric>;

const Template: ComponentStory<typeof DuballElectric> = (
  args: DuballElectricPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <DuballElectric {...args} />
    <DuballElectric
      {...args}
      colorPalette={["blue.500", "red.500", "green.500"]}
    />
    <DuballElectric {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px" };
