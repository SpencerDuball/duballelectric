import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ExposureIncrease, ExposureIncreasePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ExposureIncrease",
  component: ExposureIncrease,
} as ComponentMeta<typeof ExposureIncrease>;

const Template: ComponentStory<typeof ExposureIncrease> = (
  args: ExposureIncreasePropsI
) => (
  <x.div display="flex" gap="20px">
    <ExposureIncrease {...args} />
    <ExposureIncrease {...args} fill="red.500" />
    <ExposureIncrease {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
