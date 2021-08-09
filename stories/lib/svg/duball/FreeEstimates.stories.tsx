import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FreeEstimates, FreeEstimatesPropsI } from "lib/svg/duball";

export default {
  title: "lib/svg/duball/FreeEstimates",
  component: FreeEstimates,
} as ComponentMeta<typeof FreeEstimates>;

const Template: ComponentStory<typeof FreeEstimates> = (
  args: FreeEstimatesPropsI
) => (
  <x.div display="flex" gap="20px">
    <FreeEstimates {...args} />
    <FreeEstimates {...args} colorPalette={["red.500", "gray.50"]} />
    <FreeEstimates {...args} colorPalette={["blue.400", "gray.50"]} />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px" };
